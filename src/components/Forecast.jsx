import { useSelector } from "react-redux";
import dayjs, { utc } from "dayjs";
dayjs.extend(utc);

function Forecast() {
  const timezone = useSelector((state) => state.weather.timezone);

  const timeConverter = (dt, sign) => {
    return dayjs
      .unix(dt)
      .utc()
      .utcOffset(timezone / 60)
      .format(sign);
  };

  const { daily, hourly } = useSelector((state) => state.forecast);
  return (
    <div className="forecast">
      <div className="forecast__container _container">
        <div className="forecast__column">
          <div className="forecast__row hourly">
            {hourly.map(hourly => (
              <div key={hourly.dt} className="forecast__item">
                <p className="forecast__time">
                  {timeConverter(hourly.dt, "H")}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                  className="forecast__icon"
                />
                <p className="forecast__temp day">{Math.round(hourly.temp)}°</p>
              </div>
            ))}
          </div>
          <div className="forecast__row daily">
            {daily.map(day => (
              <div key={day.dt} className="forecast__item">
                <p className="forecast__time">
                  {timeConverter(day.dt, "dddd").slice(0, 3)}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                  className="forecast__icon"
                />
                <div className="forecast__indicator">
                  <p className="forecast__temp day">
                    {Math.round(day.temp.day)}
                  </p>
                  <p className="forecast__temp night">
                    {Math.round(day.temp.night)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
