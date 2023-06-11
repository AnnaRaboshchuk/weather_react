import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="today">
          <h3 className="date">
            <FormattedDate date={props.data.date} />
          </h3>
          <p id="city_in">
            Today in <span id="city">{props.data.city}</span> be ready for{" "}
            {props.data.description}
            
          </p>
        </div>
        <div className="row">
          <div className="col temperature-today">
            <WeatherTemperature celsius={props.data.temperature} />
           
          </div>
          <div className="col image-today">
             <WeatherIcon code={props.data.icon} size={150} /> 
          </div>
          <div className="col other-today">
            Humidity <span id="humidity">{props.data.humidity}</span> % <br />
            Wind <span id="wind">{Math.round(props.data.wind)}</span> km/h
          </div>
        </div>
      </div>
    );
}