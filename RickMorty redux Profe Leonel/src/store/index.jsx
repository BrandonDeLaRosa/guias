import { configureStore } from '@reduxjs/toolkit'
import  locationsSlice  from './slices/locations.slice'

export default configureStore({
    reducer: {
        locations: locationsSlice,
        
    }
})
