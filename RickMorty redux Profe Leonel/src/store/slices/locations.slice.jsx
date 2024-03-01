import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const locationsSlice = createSlice({
    name: 'locations',
    initialState: [],
    reducers: {
        setLocations: (state,action) => {
            return action.payload
        }

    }
})

export const getLocationsThunk = (page) => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then((res) => dispatch(setLocations(res.data.results)))
        // .finally(() => dispatch(setIsLoading(false)));
}

export const getLocationInfoThunk = (id) => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => dispatch(setLocations(res.data)))
        .catch(error => console.log(error.response))
        // .finally(() => dispatch(setIsLoading(false)));
}

export const { setLocations } = locationsSlice.actions;

export default locationsSlice.reducer;