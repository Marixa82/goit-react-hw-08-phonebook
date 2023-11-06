import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth-operations";

const initialState = {
    userData: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.userData = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.userData = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;

        },
        [authOperations.logOut.fulfilled](state, action) {
            state.userData = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.userData = action.payload;
            state.isLoggedIn = true;
            // state.authenticated = true;
        },
    },
});
export default authSlice.reducer;