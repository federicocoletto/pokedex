/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import Select from "react-select";

const Pokedex = () => {

	const base_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
	const { trainerName } = useSelector(states => states)


	const [pokemons, getAllPokemons] = useFetch(base_URL)
	let names = []

	useEffect(() => {
		getAllPokemons()
	}, []);
	
	
	pokemons?.results.map(pokemon => {
		names.push({
			label: pokemon.name,
			value: pokemon.name,
		})
	})

	const handleChange = (e) => {
		console.log(e);
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<h1>Welcome {trainerName}, here you'll find your favourite pokemons</h1>
			<form onSubmit={handleSubmit}>
				<Select onChange={handleChange} options={names} />
				<button>d</button>
			</form>
			<PokeContainer pokemons={pokemons?.results} />
		</>
	);
};

export default Pokedex;
