import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  active: boolean
}

const initialState: initialStateType = {
  active: false,
}

type selectHamburgerType = {
  active: boolean
}

const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    setHamburgerState: (state: { active: boolean }, action: PayloadAction<boolean | undefined>) => {
      state.active = action?.payload ?? !state.active
    },
  },
})

export const { setHamburgerState } = hamburgerSlice.actions
export const selectHamburgerState = (state: { hamburger: selectHamburgerType }) => state.hamburger.active

export default hamburgerSlice.reducer
