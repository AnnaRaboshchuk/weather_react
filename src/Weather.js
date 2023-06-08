import React from "react";
import "./Weather.css";


export default function Weather(){
    return (
      <div className="Weather">
        <form className="form_search">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
          <button type="submit" value="Search" class="btn btn-outline-secondary">
            🔍
          </button>
        </form>
        <div class="today">
          <h3 class="date"></h3>
          <p id="city_in">
            Today in <span id="city"></span> be ready for{" "}
            <span id="description"></span>
          </p>
        </div>
        <div class="row">
          <div class="col temperature-today">
            <span id="temperature"></span> °C
          </div>
          <div class="col image-today">
            <img src="" alt="" id="icon" />
          </div>
          <div class="col other-today">
            Humidity <span id="humidity"></span> % <br />
            Wind <span id="wind"></span> km/h
          </div>
        </div>
      </div>
    );
}