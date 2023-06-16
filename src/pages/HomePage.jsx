import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerNameG } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const { reset, register, handleSubmit } = useForm()
    const { trainerName } = useSelector(states => states)
    // const trainerName = useSelector(states => states.trainerName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (data) => {
        dispatch(setTrainerNameG(data.trainerName.trim()))
        reset({ trainerName: '' })
        navigate('/pokedex')
        // console.log(trainerName);
    }

    return (
        <>
            <h1>HomePage</h1>
            <h2>Hola {trainerName || 'entrenador'}</h2>
            <p>Para comenzar a usar la aplicación, por favor inserte su numbre de entrenador.</p>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('trainerName')} />
                <button>Atrápalos todos</button>
            </form>
        </>
    );
};

export default HomePage;
