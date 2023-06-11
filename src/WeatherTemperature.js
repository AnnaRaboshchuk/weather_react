import React, {useState} from "react";


export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState("celsius");
    function convertToF (event){
        event.preventDefault();
        setUnit("f")
    }

    function convertToC(event) {
      event.preventDefault();
      setUnit("celsius");
    }
    if (unit === 'celsius') {
        return (
          <span className="WeatherTemperature">
            <span id="temperature">{Math.round(props.celsius)}</span> °C /{" "}
            <a href="/" onClick={convertToF}>°F</a>
          </span>
        );

    }else {
        let fahrenheit = (props.celsius * 9/5 ) + 32;
        return (
          <span className="WeatherTemperature">
            <span id="temperature">{Math.round(fahrenheit)}</span>{" "}
            <a href="/" onClick={convertToC}>
              °C
            </a>
            / °F
          </span>
        );

    }
    
}