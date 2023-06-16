/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard";

const PokeContainer = ({pokemons}) => {
	return (
		<>
			{
				pokemons?.map(pokemon => (
                    <PokeCard url={pokemon.url} key={pokemon.url} />
                ))
			}
		</>
	);
};

export default PokeContainer;
