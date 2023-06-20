import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
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
				<div className="img">
					<img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
				</div>
				<h3>{pokemon?.name}</h3>
				<ul className="typeName">
					{pokemon?.types.map(typeName => (
						<li key={typeName.type.url}>{typeName.type.name.charAt(0).toUpperCase()}{typeName.type.name.slice(1)}</li>
					))}
				</ul>
				<div className="stats">
					<div className="hp">
						<h6>{pokemon?.stats[0].stat.name.toUpperCase()}</h6>
						<p>{pokemon?.stats[0].base_stat}</p>
					</div>
					<div className="attack">
						<h6>{pokemon?.stats[1].stat.name.toUpperCase()}</h6>
						<p>{pokemon?.stats[1].base_stat}</p>
					</div>
					<div className="defense">
						<h6>{pokemon?.stats[2].stat.name.toUpperCase()}</h6>
						<p>{pokemon?.stats[2].base_stat}</p>
					</div>
					<div className="speed">
						<h6>{pokemon?.stats[5].stat.name.toUpperCase()}</h6>
						<p>{pokemon?.stats[5].base_stat}</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default PokeCard;
