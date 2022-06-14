import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { fetchTime } from "./timeSlice";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);



export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, {dispatch}) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa0849c49cd6e66c250b8feb69b1c676`);
    await dispatch(fetchTime(data.coord));
    const {
      main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
      weather,
      timezone,
      dt,
      sys: { sunrise, sunset },
      wind: { speed },
    } = data;
    const { main: description, icon } = weather[0];
    return {
      temp,
      feels_like,
      description,
      city: city.split` `.map(v=>v.charAt(0).toUpperCase()+v.slice(1)).join` `,
      temp_min,
      temp_max,
      humidity,
      pressure,
      sunrise,
      sunset,
      timezone,
      dt,
      speed,
      icon,
    };
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    status: 'idle',
    visible: false,
    temp: "",
    feels: "",
    description: "",
    city: "",
    temp_min: "",
    temp_max: "",
    humidity: "",
    pressure: "",
    speed: "",
    icon: "",
    sunrise: "",
    sunset:"",
    timezone: "",
    dt: "",
  },
  extraReducers: {
    [fetchWeather.fulfilled]: (state, action) => {
      const {
        temp,
        feels_like,
        description,
        city,
        temp_min,
        temp_max,
        humidity,
        pressure,
        speed,
        icon,
        sunrise,
        timezone,
        sunset,
        dt
      } = action.payload;
      state = {
        status: 'success',
        visible: true,
        temp: Math.round(temp),
        feels: Math.round(feels_like),
        description,
        city,
        temp_min: Math.round(temp_min),
        temp_max: Math.round(temp_max),
        humidity,
        pressure,
        speed,
        icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
        sunrise: dayjs.unix(sunrise).utc().utcOffset(timezone / 60).format('H:m'),
        sunset: dayjs.unix(sunset).utc().utcOffset(timezone / 60).format('H:m'),
        timezone,
        dt: dayjs.unix(dt).utc().utcOffset(timezone / 60).format(),
      };
      return state;
    },
    [fetchWeather.rejected]: (state) => {
        state.status = 'rejected';
    }
  },
});

export default weatherSlice.reducer;
