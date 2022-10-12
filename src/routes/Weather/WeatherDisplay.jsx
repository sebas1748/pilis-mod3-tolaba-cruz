import './WeatherDisplay.css';
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { WeatherCardsContext } from "../../context/WeatherCardsContext";

const WeatherDisplay = () => {
    const{id}=useParams();
    const{weatherCards} = useContext(WeatherCardsContext);
    const [weather] = weatherCards.filter(
        (weather) => weather.id === Number(id)
    )

    return (
        <div className="weather-display-container">
            <div className="weather-display-card">
                <h1 className="weather-display-name">{weather.name}</h1>
                <h3>{weather.latitude}</h3>
                <h3>{weather.longitude}</h3>
            </div>

        </div>
    )
}

export default WeatherDisplay