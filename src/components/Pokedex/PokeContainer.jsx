/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard";
import './styles/PokeContainer.css'
const PokeContainer = ({pokemons}) => {
	return (
		<div className="pokecontainer">
			{
				pokemons?.map(pokemon => (
                    <PokeCard url={pokemon.url} key={pokemon.url} />
                ))
			}
		</div>
	);
};

export default PokeContainer;
