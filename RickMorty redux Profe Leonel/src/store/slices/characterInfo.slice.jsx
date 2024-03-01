import { createSlice } from '@reduxjs/toolkit';

export const characterInfoSlice = createSlice({
    name: 'characterInfo',
    initialState: [],
    reducers: {
        setCharacterInfo: (state, action) => {
            return action.payload
        }
    }
})

export const characterInfoThunk = () => (dispatch) => {
    // dispatch(setIsLoading(true));
    return axios.get()
        .then(() => dispatch(/* action */))
        // .finally(() => dispatch(setIsLoading(false)));
}

export const { setCharacterInfo } = characterInfoSlice.actions;

export default characterInfoSlice.reducer;
