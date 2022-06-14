import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({ 
    name: 'forecast',
    initialState: {
        daily: [],
        hourly: [],
    },
    reducers: {
        clearForecast: (state) => {
            state.daily = [];
            state.hourly = [];
        },
        setForecast: (state, action) => {
            const { daily, hourly } = action.payload;
            [state.daily, state.hourly] = [daily.slice(1), hourly.slice(1, 8)];
        }
    }
})

export const { clearForecast, setForecast } = forecastSlice.actions;

export default forecastSlice.reducer;