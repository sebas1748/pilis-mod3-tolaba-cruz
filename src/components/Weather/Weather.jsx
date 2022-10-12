import './Weather.css';
import { useState, useContext } from "react";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";
import {GoTrashcan} from "react-icons/go"

const Weather = ({ weather }) => {
    const {id, name, latitude, longitude, temperature, windspeed} = weather

    //console.log("ubicacion: " + JSON.stringify(weather));

    const {weatherCards, setWeatherCards} = useContext(WeatherCardsContext);
    const [deleteWeather, setDeleteWeather] = useState('');

    
    const handleCardDelete = () => {
        //Eliminar Tarjeta de Ubicación
        setWeatherCards(weatherCards.filter((weatherCard) => weatherCard.id !== id))
    }
    
    //TODO tienes que modificar el like en la paleta
    // const handleFavorite = () => {
    //     setIsFavorite((isFavorite) => !isFavorite);
    
    //     //busco si la paleta ya esta en favoritos
    //     const foundIndex = favorites.findIndex(fav => fav.id === id);
    
    //     //para agregar a favoritos
    //     if (foundIndex === -1) {
    //       setFavorites([...favorites, palette])
    //       return
    //     }
    
    //     //Quitar de favoritos
    //     setFavorites(
    //       favorites.filter((fav) => fav.id !== id )//!==
    //     );
    //   }
    return (
        <div className="weather-container">
            <div className="weather">
                <h3>N°: {id}</h3>
                <h3>Ubicación: {name}</h3>
                <h3>Latitud: {latitude}</h3>
                <h3>Longitud: {longitude}</h3>
                <h3>Temperatura: {temperature}°</h3>
                <h3>Vel. del Viento: {windspeed}</h3>
                
            </div>
            <div className="weather-actions">
                <div className="">
                    <button className="btn-see-more" onClick={handleCardDelete}>
                        <span className="btn-text">Eliminar </span><GoTrashcan/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Weather