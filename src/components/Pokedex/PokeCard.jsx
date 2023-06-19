import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "/src/styles/Pokedex/PokeCard.css";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const PokeCard = ({ url }) => {

	const [pokemon, getPokemon] = useFetch(url)

	useEffect(() => {
		getPokemon()
	}, []);

	const navigate = useNavigate()


	const handlePokeName = () => {
		navigate(`/pokedex/${pokemon.name}`)
	}

	return (
		<>
			<article className="poke-card" onClick={handlePokeName} style={{border: '1px solid'}}>
				<h3>{pokemon?.name}</h3>
				<ul className="typeName">
					{pokemon?.types.map(typeName => (
						<li key={typeName.type.url}>{typeName.type.name}</li>
					))}
				</ul>
				<ul className="">
					{pokemon?.stats.map(stat => (
						<li key={stat.stat.url}>
							<span>{stat.stat.name}</span>
							<span>{stat.base_stat}</span>
						</li>
					))}
				</ul>
				<div className="img">
					<img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
				</div>
				<div className="stats">
					<div className="hp">
						{/* <p>{pokemon?.}</p> */}
						{/* <p>{base_stat}</p> */}
					</div>
					<div className="attack"></div>
					<div className="defense"></div>
					<div className="speed"></div>
				</div>
			</article>
		</>
	);
};

export default PokeCard;
