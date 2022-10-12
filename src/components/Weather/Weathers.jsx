import './Weathers.css';
import Weather from './Weather';
import { WeatherCardsContext } from '../../context/WeatherCardsContext';
import { useContext } from 'react';

const Weathers = () => {
    const weathers = useContext(WeatherCardsContext);
    //console.log("ubicaciones: " + JSON.stringify(weathers));
    
    return(
        <div className='grid'>
        {weathers.weatherCards.map((weather) => (
            <Weather key={weather.id} weather={weather}/>
        ))}
        </div>
    );
}

export default Weathers;