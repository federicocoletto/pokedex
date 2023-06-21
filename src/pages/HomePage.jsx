import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setTrainerNameG } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import '../components/Home/HomePage.css'

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
        <article className="home-page">
            <h2>Welcome, {trainerName || 'trainer'}</h2>
            <p className="trainerName__msg">To begin, please insert your triner name:</p>
            <form onSubmit={handleSubmit(submit)}>
                <input className="trainerName__input"
                    type="text" {...register('trainerName')} 
                    placeholder="Insert your triner name (+3 letters)"
                />
                <button className="trainerName__btn">Atrápalos todos</button>
            </form>
        </article>
    );
};

export default HomePage;
