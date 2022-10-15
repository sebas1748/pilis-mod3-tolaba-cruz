import './Weathers.css';
import Weather from './Weather';
import { WeatherCardsContext } from '../../context/WeatherCardsContext';
import { useContext,useEffect } from 'react';

const Weathers = () => {
    const weathers = useContext(WeatherCardsContext);
    const { weatherCards, setWeatherCards } = useContext(WeatherCardsContext);
    //console.log("Esto no es local storage: " + JSON.stringify(weathers));
    
    //setear contenido de LocalStorage
    useEffect(() => {
        const weatherStored = localStorage.getItem('weather')
        console.log({weatherStored})
        if (weatherStored) {
            setWeatherCards(JSON.parse(weatherStored))
        }
      }, [])

    return(
        <div className='grid'>
        {weathers.weatherCards.map((weather) => (
            <Weather key={weather.id} weather={weather}/>
        ))}
        </div>
    );
}

export default Weathers;