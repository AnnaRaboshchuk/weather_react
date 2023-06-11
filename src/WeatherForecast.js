import React, {useState, useEffect} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    useEffect(() => {
       setLoaded(false);
    }, [props.city] )




    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
    
    if (loaded) {
        console.log(forecast)
        return (
          <div className="WeatherForecast">
            <div>
              <p class="maybe">Maybe the next days will be like this</p>
            </div>
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                        return (
                          <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                          </div>
                        );

                    }
                    
                })}
              
            </div>
          </div>
        );   
    }else{
         let apiKey = "fa83f6abf9f3cb059b4c510t1c4bof9a";
         let city = props.city;

         let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

         axios.get(apiUrl).then(handleResponse);
         return null;
    }

   

}