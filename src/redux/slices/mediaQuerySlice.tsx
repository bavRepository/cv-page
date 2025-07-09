import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mediaTablet: false,
}

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMediaTabletState: (state, action) => {
      state.mediaTablet = action.payload
    },
  },
})
export const { setMediaTabletState } = mediaSlice.actions
export const selectmediaTabletState = (state) => state.media.mediaTablet

export default mediaSlice.reducer
