import { configureStore } from '@reduxjs/toolkit'
import hamburgerReducer from './slices/hamburgerSlice.tsx'
import mediaReducer from './slices/mediaQuerySlice.tsx'
const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    media: mediaReducer,
  },
})

export default store
