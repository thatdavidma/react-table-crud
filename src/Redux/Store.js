import { configureStore } from "@reduxjs/toolkit";
import selectedUsersReducer from "./SelectionUsers"
import currentUserReducer from "./CurrentUser"

export default configureStore({
    reducer: {
        selectUsers: selectedUsersReducer,
        currentUser: currentUserReducer
    }
})