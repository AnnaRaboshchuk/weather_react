import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast () {
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