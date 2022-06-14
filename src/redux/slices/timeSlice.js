import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearForecast, setForecast } from './forecastSlice';

export const fetchTime = createAsyncThunk(
    'time/fetchTime',
    async (coord, {dispatch}) => {
      const { lon, lat } = coord;
      const { data: { timezone, daily, hourly }, status} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=fa0849c49cd6e66c250b8feb69b1c676`);
      const { data: { time_24 } } = await axios.get(`https://api.ipgeolocation.io/timezone?apiKey=62c5795e9b56401abafd79713832ee1e&tz=${timezone}`);
      if (status === 200) {
        dispatch(setForecast({daily, hourly}))
      } else {
        dispatch(clearForecast());
      }
      return time_24.slice(0,-3);
    }
)

const timeSlice = createSlice({
    name: 'time',
    initialState: {
      status: 'idle',
      time: '',
    },
    reducers: {},
    extraReducers: {
      [fetchTime.fulfilled]: (state, action) => {
        state.status = 'success';
        state.time = action.payload;
      },
      [fetchTime.rejected] : (state, action) => {
        state.status = 'idle';
        state.time = ''
      }
    },
})

export default timeSlice.reducer;