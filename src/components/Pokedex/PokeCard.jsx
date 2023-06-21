import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './styles/PokeCard.css'

/* eslint-disable react/prop-types */
const PokeCard = ({ url }) => {

	const [pokemon, getPokemon] = useFetch(url)

	useEffect(() => {
		getPokemon()
	}, []);

	const navigate = useNavigate()


	const handlePokeName = () => {
		navigate(`/pokedex/${pokemon.name}`)
		console.log(pokemon);
	}


	return (
		<>
			<article className={`pokecard ${pokemon?.types[0].type.name}`}>
				<header className="pokecard__header" onClick={handlePokeName}>
					<img
						src={pokemon?.sprites.other['official-artwork'].front_default}
						alt=""
						className="pokecard__img" />
				</header>
				<section className="pokecard__body">
					<h3 className="pokecard__name">{pokemon?.name}</h3>
					<ul className="pokecard__types">
						{pokemon?.types.map(typeName => (
							<li key={typeName.type.url} className="pokecard__types-item">{typeName.type.name}</li>
						))}
					</ul>
					<h6 className="pokecard__types-type">Type</h6>
				</section>
				<footer className="pokecard__footer">
					<ul className="pokecard__stats">
						{
							pokemon?.stats.map(stat => (
								<li key={stat.url} className="pokecard__stats-item">
									<h6 className="pokecard__stats-label">{stat.stat.name}</h6>
									<h3 className="pokecard__stats-value">{stat.base_stat}</h3>
								</li>
							))
						}
					</ul>
				</footer>
			</article>
		</>
	);
};

export default PokeCard;
