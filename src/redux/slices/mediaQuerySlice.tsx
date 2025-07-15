import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  mediaTablet: boolean
}

const initialState: initialStateType = {
  mediaTablet: false,
}

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMediaTabletState: (state: initialStateType, action: PayloadAction<boolean>) => {
      state.mediaTablet = action.payload
    },
  },
})
export const { setMediaTabletState } = mediaSlice.actions

export const selectmediaTabletState = (state: { media: initialStateType }) => state.media.mediaTablet

export default mediaSlice.reducer
