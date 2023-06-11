import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    }


    return (
      <div>
        <div className="forecast-date">{day()}</div>
        <div className="forecast-temperature">
          <span class="forecast-temp-max">
            {Math.round(props.data.temperature.maximum)}°
          </span>{" "}
          <span class="forecast-temp-min">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
        <WeatherIcon code={props.data.condition.icon} size={36} />
      </div>
    );

}