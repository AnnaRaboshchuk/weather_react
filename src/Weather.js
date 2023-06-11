import React, {useState} from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


export default function Weather(props){
  
  const [weatherData, setWeatherDate] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherDate({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
    
  }
  function search () {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
        
      </div>
    );
  } else {
    search();
    return "Loading...";
  }



    
}