import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  media768: false,
}

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMedia768State: (state, action) => {
      state.media768 = action.payload
    },
  },
})
export const { setMedia768State } = mediaSlice.actions
export const selectMedia768State = (state) => state.media.media768

export default mediaSlice.reducer
