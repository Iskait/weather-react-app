import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
import weatherReducer from './slices/weatherSlice';
import timeReducer from './slices/timeSlice';
import forecastReducer from './slices/forecastSlice';
export const store = configureStore({
    reducer: {
        header: headerReducer,
        weather: weatherReducer,
        time: timeReducer,
        forecast: forecastReducer,
    }
})
