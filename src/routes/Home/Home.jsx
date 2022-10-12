import './Home.css';
import { useContext } from "react";
import Weathers from '../../components/Weather/Weathers';
import { WeatherCardsContext } from "../../context/WeatherCardsContext";

const Home = () => {
    const {weatherCards} = useContext(WeatherCardsContext);

    return (
        <div className="main-container">
            <Weathers />
        </div>
    )
}

export default Home;