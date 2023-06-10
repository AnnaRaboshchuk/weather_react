import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";


export default function Weather(props){
  
  const [weatherData, setWeatherDate] = useState({ready: false})
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
      iconUrl: ""
    });
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form_search">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
          <button
            type="submit"
            value="Search"
            class="btn btn-outline-secondary"
          >
            🔍
          </button>
        </form>
        <div class="today">
          <h3 class="date">
            <FormattedDate date={weatherData.date} />

          </h3>
          <p id="city_in">
            Today in <span id="city">{weatherData.city}</span> be ready for
            {weatherData.description}
            <span id="description"></span>
          </p>
        </div>
        <div class="row">
          <div class="col temperature-today">
            <span id="temperature">{Math.round(weatherData.temperature)}</span>{" "}
            °C
          </div>
          <div class="col image-today">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              id="icon"
            />
          </div>
          <div class="col other-today">
            Humidity <span id="humidity">{weatherData.humidity}</span> % <br />
            Wind <span id="wind">{Math.round(weatherData.wind)}</span> km/h
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }



    
}