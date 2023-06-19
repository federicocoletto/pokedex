/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard";
import "/src/styles/Pokedex/PokeContainer.css";


const PokeContainer = ({pokemons}) => {
	return (
		<div className="poke-container">
			{
				pokemons?.map(pokemon => (
                    <PokeCard url={pokemon.url} key={pokemon.url} />
                ))
			}
		</div>
	);
};

export default PokeContainer;
