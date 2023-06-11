import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
    function handleResponse(response) {
      console.log(response.data);
    }
    let apiKey = "fa83f6abf9f3cb059b4c510t1c4bof9a";
    let city = props.city;
    
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse)

    return (
      <div className="WeatherForecast">
        <div>
          <p class="maybe">Maybe the next days will be like this</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="forecast-date">Mon</div>
            <div className="forecast-temperature">
              <span class="forecast-temp-max">19°</span>{" "}
              <span class="forecast-temp-min">10°</span>
            </div>
            <WeatherIcon code="clear-sky-day" size={36} />
          </div>
        </div>
      </div>
    );

}