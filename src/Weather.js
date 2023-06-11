import React, {useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props){
  
  const [weatherData, setWeatherDate] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherDate({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
    
  }
  function search () {
    const apiKey = "fa83f6abf9f3cb059b4c510t1c4bof9a";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();

  }

  function handleCityChange (event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="form_search">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button
            type="submit"
            value="Search"
            class="btn btn-outline-secondary"
          >
            🔍
          </button>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>
        
      </div>
    );
  } else {
    search();
    return "Loading...";
  }



    
}