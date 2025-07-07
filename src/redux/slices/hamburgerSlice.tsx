import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false,
}

const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    setHamburgerState: (state, action: { payload?: boolean; type?: string }) => {
      state.active = action.payload ?? !state.active
    },
  },
})

export const { setHamburgerState } = hamburgerSlice.actions
export const selectHamburgerState = (state) => state.hamburger.active

export default hamburgerSlice.reducer
