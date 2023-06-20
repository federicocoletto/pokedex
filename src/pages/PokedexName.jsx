import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const PokedexName = () => {

	const { name } = useParams()
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`


	const [pokemon, getPokemonByName, hasError] = useFetch(url)

	useEffect(() => {
		getPokemonByName()
	}, [name])

	return (
		<>
			{
				hasError
				? (
					<h1>{name} is not a pokemon</h1>
				)
				: (
				<article>
					<div className="img">
						<img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
					</div>
					<header>
						<h1># {pokemon?.id}</h1>
						<h1>{pokemon?.name}</h1>
						<ul>
							<li><span>Weight</span>{pokemon?.weight}</li>
							<li><span>Height</span>{pokemon?.height}</li>
						</ul>
						<div className="main">
							<div className="type-abi">
								<div className="type">
									<h5>Type</h5>
									<ul>
										{
											pokemon?.types.map(statName => <li key={statName.type.url}>{statName.type.name}</li>)
										}
									</ul>
								</div>
								<div className="abilities">
									<h5>Abilities</h5>
									<ul>
										{
											pokemon?.abilities.map(abiName => <li key={abiName.ability.url}>{abiName.ability.name}</li>)
										}
									</ul>
								</div>
							</div>
							<div className="stats">
								<ul>
									{
										pokemon?.stats.map(statName => (
											<li key={statName.stat.url}>
												<label htmlFor={statName.stat_name}>{statName.stat.name}</label>
												<p>{statName.base_stat}/150</p>
												<progress id={statName.stat_name} max="100" value={statName.base_stat}></progress>
											</li>
										))
									}
								</ul>
							</div>
						</div>
						<div className="movements">
							<h1>Movements</h1>
							<ul>
								{
									pokemon?.moves.map(moveName => (
										<li key={moveName.move.url}>{moveName.move.name}</li>
									))
								}
							</ul>
						</div>
					</header>
				</article>
				)
			}
		</>
	)
};

export default PokedexName;
