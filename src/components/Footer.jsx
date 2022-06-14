import { useSelector } from "react-redux";


function Footer() {
  const { humidity, pressure, speed, feels, sunset, sunrise } = useSelector(
    (state) => state.weather
  );
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__info">
          <p className="footer__humidity info-item">
            <span>Humidity:</span> <span>{humidity} %</span>
          </p>
          <p className="footer__pressure info-item">
            <span>Pressure:</span> <span>{pressure} mm Hg</span>
          </p>
          <p className="footer__sunrise info-item">
            <span>Sunrise:</span> <span>{sunrise}</span>
          </p>
          <p className="footer__sunset info-item">
            <span>Sunset:</span> <span>{sunset}</span>
          </p>
          <p className="footer__feels-like info-item">
            <span>Feels like:</span> <span> {feels} °C</span>
          </p>
          <p className="footer__wind-speed info-item">
            <span>Speed:</span>
            <span>{speed} m/s</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
