import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div class="today">
          <h3 class="date">
            <FormattedDate date={props.data.date} />
          </h3>
          <p id="city_in">
            Today in <span id="city">{props.data.city}</span> be ready for
            {props.data.description}
            <span id="description"></span>
          </p>
        </div>
        <div class="row">
          <div class="col temperature-today">
            <span id="temperature">{Math.round(props.data.temperature)}</span>{" "}
            °C
          </div>
          <div class="col image-today">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="icon"
            />
          </div>
          <div class="col other-today">
            Humidity <span id="humidity">{props.data.humidity}</span> % <br />
            Wind <span id="wind">{Math.round(props.data.wind)}</span> km/h
          </div>
        </div>
      </div>
    );
}