/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Pokedex/Pokedex.css'
import PokePagination from "../components/Pokedex/PokePagination";

const Pokedex = () => {

	const [selectedType, setSelectedType] = useState("filter-by-type");
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(30);

	const trainerName = useSelector(states => states.trainerName)

	let pokemons_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1281offset=0'

	const types_URL = 'https://pokeapi.co/api/v2/type'
	const [pokemons, getAllPokemons, hasError, setApiInfo] = useFetch(pokemons_URL)
	const [types, getAllTypes] = useFetch(types_URL)

	useEffect(() => {
		if (selectedType === 'filter-by-type') {
			setLoading(true)
			getAllPokemons()
			setLoading(false)
		} else {
			setLoading(true)
			axios
				.get(selectedType)
				.then(res => {
					const data = {
						results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
					}
					setApiInfo(data)
					setLoading(false)
				})
				.catch(err => console.log(err))
		}
		getAllTypes()
	}, [selectedType]);

	const searchName_ref = useRef()
	const navigate = useNavigate()

	const handleSubmitName = (e) => {
		e.preventDefault()
		const inputValue = searchName_ref.current.value.trim().toLowerCase()
		navigate(`/pokedex/${inputValue}`)
	}

	const handleChangeType = (e) => {
		setSelectedType(e.target.value);
	}

	// get current posts
	const indexOfLastPokemon = pokemonsPerPage * currentPage;
	const indexOfFirsPokemon = indexOfLastPokemon - pokemonsPerPage;
	const currentPokemons = pokemons?.results.slice(indexOfFirsPokemon, indexOfLastPokemon)

	// change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	console.log(pokemons);

	return (
		<>
			<h1 className="welcome__msg">Welcome {trainerName[0].toUpperCase()}{trainerName.slice(1)}, here you'll find your favourite pokemons</h1>
			<form className="pokedex__form" onSubmit={handleSubmitName}>
				<input className="form-input"
					type="text"
					ref={searchName_ref}
					placeholder="pokemon name"
				// onChange={handleChangeName} 
				// value={inputName}
				/>
				<select onChange={handleChangeType}>
					<option value="filter-by-type">Fiter by type</option>
					{
						types?.results.map(type => (
							<option
								value={type.url}
								key={type.url}
							>{type.name.charAt(0).toUpperCase()}{type.name.slice(1)}</option>
						))
					}
				</select>
				<button>Search</button>
			</form>
			<PokePagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons?.results.length} />
			<PokeContainer pokemons={currentPokemons} loading={loading} paginate={paginate} />
		</>
	);
};

export default Pokedex;
