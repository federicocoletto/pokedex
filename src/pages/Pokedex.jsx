/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";

const Pokedex = () => {

    const base_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
    const { trainerName } = useSelector(states => states)


    const [pokemons, getAllPokemons] = useFetch(base_URL)

    useEffect(() => {
        getAllPokemons()
    }, []);
    

    return (
        <>
            <h1>Welcome {trainerName}, here you'll find your favourite pokemons</h1>
            <PokeContainer pokemons={pokemons?.results} />
        </>
    );
};

export default Pokedex;
