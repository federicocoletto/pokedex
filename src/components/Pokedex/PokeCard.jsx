import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

/* eslint-disable react/prop-types */
const PokeCard = ({ url }) => {

	const [pokemon, getPokemon] = useFetch(url)

	useEffect(() => {
		getPokemon()
	}, []);

	console.log(pokemon);

	return (
		<>
			<div className="poke-card">
				<h3>{pokemon?.name}</h3>
				<div className="img">
					<img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
				</div>
			</div>
		</>
	);
};

export default PokeCard;
