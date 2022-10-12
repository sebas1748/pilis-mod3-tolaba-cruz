import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useContext, useEffect } from "react";
import { WeatherCardsContext } from "./context/WeatherCardsContext";
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import WeatherCreation from './routes/Weather/WeatherCreation';
import WeatherDisplay from './routes/Weather/WeatherDisplay';
import { getWeather } from './service';


function App() {
  // const { setWeatherCards } = useContext(WeatherCardsContext)

  // useEffect(() => {
  //   getWeather()
  //   .then((data) => {
  //     setWeatherCards(data);
  //   })
  //   .cath((err) => console.log(err));
  // }, [])

  return(
    <div className="">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='weather/:id' element={<WeatherDisplay/>}/>
          <Route path='weather/create' element={<WeatherCreation/>}/>
        </Route>
      </Routes>
    </div>
  );

}

export default App;