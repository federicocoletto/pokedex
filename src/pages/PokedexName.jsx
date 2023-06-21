/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef } from "react";
import '../styles/PokeName/PokeName.css'

const PokedexName = () => {

	const { name } = useParams()
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`


	const [pokemon, getPokemonByName, hasError, setApiInfo, isLoading, setIsLoading] = useFetch(url)

	useEffect(() => {
		getPokemonByName()
		// console.log(String(pokemon?.stats.map(s => s.base_stat)));
	}, [name])


	return (
		<>
			{
				hasError && <h1>{name} is not a pokemon</h1>
			}

			{
				isLoading
					? (
						!hasError && (<h1>Loading {pokemon} info</h1>)
					)
					: (
						<article className="pokename">
							<header className='pokename__header'>
								<div className={`pokename__img ${pokemon?.types[0].type.name}`}>
									<img className="poke-img"
										src={pokemon?.sprites.other['official-artwork'].front_default}
										alt="" />
								</div>
								<h1 className={`poke-id ${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
								<h1 className={`poke-name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
								<div className="pokename__wh">
									<p className="wh_label">Weight</p>
									<p className="wh_label">Height</p>
									<h5 className="wh_value">{pokemon?.weight}</h5>
									<h5 className="wh_value">{pokemon?.height}</h5>
								</div>
								<div className="pokename__info">
									<p className="pokename__info-label">Type</p>
									<p className="pokename__info-label">Abilities</p>
									{pokemon?.types.map(typeName => (
										<p
											key={typeName.type.url}
											className={`pokename__info-type-item ${typeName.type.name}_bg`}>
											{typeName.type.name}</p>
									))}
									{pokemon?.abilities.map(abiName => (
										<p
											key={abiName.ability.url}
											className="pokename__info-ability-item"
										>{abiName.ability.name}</p>
									))}
								</div>
							</header>
							<section className="pokename__stats">
								<h2>Stats</h2>
								{pokemon?.stats.map(statName => (
									<>
										<h6 className="stat__label">{statName.stat.name}</h6>
										<div key={statName.stat.url} className="progress" style={{ height: '25px' }}>
											<div
												style={{ width: `${statName.base_stat}%` }}
												className="progress-bar"
												role="progressbar"
												aria-valuenow="50"
												aria-valuemin="0"
												aria-valuemax="100">
											</div>
										</div>
									</>
								))}
							</section>
							<section className="pokename__movements">
								<h2>Movements</h2>
								<ul className="movements">
									{
										pokemon?.moves.map(moveName => (
											<li key={moveName.move.url} className="movement">{moveName.move.name}</li>
										))
									}
								</ul>
							</section>
						</article >
					)
			}
		</>
	)
};

export default PokedexName;
