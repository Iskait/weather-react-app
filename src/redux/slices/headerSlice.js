import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: '',
    reducers: {
        setField: (state, action) => state = action.payload.value,
        clearField: (state) => state = '',
    }
})

export const { setField, clearField } = headerSlice.actions;

export default headerSlice.reducer;