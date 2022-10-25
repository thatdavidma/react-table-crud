import { createSlice } from "@reduxjs/toolkit";

// For setting the current user to get the details
export const currentUserSlice = createSlice({
    name: "setCurrentUser",
    initialState: {
      user: {}
    },
    reducers: {
      setCurrentUser: (state, action) => ({
        ...state,
        user: { name: action.payload.name, email: action.payload.email, role: action.payload.role }
      }),
      resetCurrentUser: (state) => ({
        ...state,
        user: {}
      })
    }
  })

  // Exports for Current User setting
export const { setCurrentUser, resetCurrentUser } = currentUserSlice.actions
export default currentUserSlice.reducer