import { createSlice } from "@reduxjs/toolkit";

// For setting multi-selection of users
export const selectedUsersSlice = createSlice({
  name: "setSelectUsers",
  initialState: {
    selectUsers: [],
  },
  reducers: {
    addSelectedUser: (state, action) => ({
      ...state,
      selectUsers: state.selectUsers.concat({ name: action.payload.name, email: action.payload.email, role: action.payload.role })
    }),
    removeSelectedUser: (state, action) => ({
      ...state,
      selectUsers: state.selectUsers.filter(obj => obj.email !== action.payload.email)
    }),
    resetSelectedUsers: (state) => ({
      ...state,
      selectUsers: []
    })

  }
});

// Exports for Multi-selection of Users
export const { addSelectedUser, removeSelectedUser, resetSelectedUsers } = selectedUsersSlice.actions;
export default selectedUsersSlice.reducer;
