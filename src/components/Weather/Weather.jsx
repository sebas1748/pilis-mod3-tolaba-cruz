import './Weather.css';
import { useState, useContext } from "react";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";
import {GoTrashcan} from "react-icons/go";
import { WiThermometer, WiStrongWind} from "react-icons/wi";
import { TbWorldLatitude,TbWorldLongitude } from "react-icons/tb";
import { ContDeleteContext } from '../../context/ContDeleteContext';


const Weather = ({ weather }) => {
    const {id, name, latitude, longitude, temperature, windspeed} = weather

    const {contDelete, setContDelete} = useContext(ContDeleteContext);

    //console.log("ubicacion: " + JSON.stringify(weather));

    const {weatherCards, setWeatherCards} = useContext(WeatherCardsContext);
    // const [deleteWeather, setDeleteWeather] = useState('');
    
    const handleCardDelete = () => {
        //Eliminar Tarjeta de Ubicación
        const contDeleteAux = contDelete + 1
        console.log("esto es contador: ", contDeleteAux);
        setContDelete(contDeleteAux)
        // let weatherDelete = weatherCards.filter(weather => weather.id === id)
        // weatherDelete
        setWeatherCards(weatherCards.filter((weatherCard) => weatherCard.id !== id))
        
        //Eliminar del LocalStorage
        let myArrayObj = JSON.parse(localStorage.getItem('weather'));
        myArrayObj = myArrayObj.filter(objLocalStorage => objLocalStorage.id !== id);
        localStorage.setItem('weather', JSON.stringify(myArrayObj));
    }
    
    const tab = <>&nbsp;</>;

    return (
        <div className="weather-container">
            <div className="weather">
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>N°:</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>Ubicación:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td className='color-negro'>Latitud: </td>
                            <td className='color-text'>{latitude} <TbWorldLatitude className='icons-weather'/></td>
                        </tr>
                        <tr>
                            <td>Longitud:</td>
                            <td>{longitude}  <TbWorldLongitude className='icons-weather'/></td>
                        </tr>
                        <tr>
                            <td>Temperatura:</td>
                            <td>{tab} {temperature}° <WiThermometer className='icons-weather'/></td>
                        </tr>
                        <tr>
                            <td>Vel. del viento:</td>
                            <td>{tab} {windspeed} <WiStrongWind className='icons-weather'/></td>
                        </tr>
                    </tbody>
                </table>    
            </div>
            <div className="weather-actions">
                <button className="btn-see-more" onClick={handleCardDelete}>
                    <span className="btn-text">Eliminar </span><GoTrashcan/>
                </button>
            </div>
        </div>
    )
}

export default Weather