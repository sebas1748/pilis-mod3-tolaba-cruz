import './WeatherCreation.css';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";
import { getWeather } from "../../service";
import { ContDeleteContext } from '../../context/ContDeleteContext';

const WeatherCreation = () => {
    const {weatherCards, setWeatherCards } = useContext(WeatherCardsContext)
    const {contDelete, setContDelete} = useContext(ContDeleteContext);
    const {register, handleSubmit, formState: { errors },} = useForm({})
    const navigate = useNavigate()

    const onSubmit = (data) =>{
        //console.log("esto es longitud; "+JSON.stringify(data));
        getForm(data);
        navigate('/')
    };
    
    const getForm = (formData) => {
        getWeather(formData.weatherLatitude,formData.weatherLongitude)
        .then((data) => {
          const weatherNew = {
            id: weatherCards.length + contDelete + 1,
            name: formData.weatherName,
            latitude: data.latitude,
            longitude: data.longitude,
            temperature: data.current_weather.temperature,
            windspeed: data.current_weather.windspeed,
            // image: urlImage,
            view: true,
          }

            //Agregar Ubicación en el LocalStorage
            let myWeathers = JSON.parse(localStorage.getItem('weather')) || [];
            myWeathers.push(weatherNew);
            localStorage.setItem('weather', JSON.stringify(myWeathers))

          setWeatherCards([...weatherCards, weatherNew])
          navigate('/')
        }) 
        .catch((err) => console.log(err));  
      };


    return (
        <div className="weather-new-container">
            
            <form className="weather-form" onSubmit={handleSubmit(onSubmit)}>
                <span>Crear nueva ubicación</span>
                <input
                    className="input-weather-name-form"
                    type="text"
                    placeholder="Escriba su ubicación "
                    {...register('weatherName', {
                        required: "Debe ingresar su ubicación"
                    })}
                />
                <p>{errors.weatherName?.message}</p>
                
                <input
                    className="input-weather-name-form"
                    type="text"
                    placeholder="Ingrese latitud "
                    {...register('weatherLatitude', {
                        required: "Debe ingresar una latitud"
                    })}
                />
                <p>{errors.weatherLatitude?.message}</p>

                <input
                    className="input-weather-name-form"
                    type="text"
                    placeholder="Ingrese longitud "
                    {...register('weatherLongitude', {
                        required: "Debe ingresar una longitud"
                    })}
                />
                <p>{errors.weatherLongitude?.message}</p>

                <button className='btn-form' type='submit'>
                  Crear Ubicación
                </button>
            </form>
        </div>
    )
}

export default WeatherCreation