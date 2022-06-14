import { useSelector } from "react-redux";
import Forecast from "./Forecast";
import Time from "./Time";


function Weather() {

  const { temp, description, city, temp_min, temp_max, icon } = useSelector(
    (state) => state.weather
  );

  return (
    <main className="weather">
      <div className="weather__container _container">
        <div className="weather__column">
          <h1 className="weather__city">{city}</h1>
          <p className="weather__description">{description}</p>
          <img src={icon} alt="weather-icon" />
          <p className="weather__temp">{temp}</p>
          <div className="weather__limits">
            <p className="weather__metes max">H: {temp_max}</p>
            <p className="weather__metes min">L: {temp_min}</p>
          </div>
          <Time />
        </div>
      </div>
      <Forecast/>
    </main>
  );
}

export default Weather;
