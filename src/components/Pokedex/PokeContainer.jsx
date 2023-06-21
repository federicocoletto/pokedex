/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard";
import './styles/PokeContainer.css'
const PokeContainer = ({pokemons, loading}) => {
	return (
		<div className="pokecontainer">
			{ 
				loading
				? <h1>Loading...</h1>
				: (
					pokemons?.map(pokemon => (
						<PokeCard url={pokemon.url} key={pokemon.url} />
					))
				)
			}
		</div>
	);
};

export default PokeContainer;
