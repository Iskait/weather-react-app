import { useSelector, useDispatch } from "react-redux";
import { setField, clearField } from "../redux/slices/headerSlice";
import { fetchWeather } from '../redux/slices/weatherSlice';


function Header() {
  const value = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const getWeather = async (city, event) => {
    if (event.key === 'Enter') {
      dispatch(fetchWeather(city));
      dispatch(clearField());
    } else return;
  }

  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__row">
          <input
            className="header__input"
            placeholder="Enter the city..."
            value={value}
            onChange={(e) => dispatch(setField({ value: e.target.value }))}
            onKeyDown={(e) => getWeather(value, e)}
          />
          {value.length > 0 && (
            <button
              className="header__clear"
              onClick={() => dispatch(clearField())}
            >
              &#10006;
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
