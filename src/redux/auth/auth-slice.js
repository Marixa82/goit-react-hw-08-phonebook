import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth-operations";

const initialState = {
    userData: { name: null, email: null },
    token: null,
    authenticated: false,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.userData = action.payload.user;
            state.token = action.payload.token;
            state.authenticated = true;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.userData = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.authenticated = true;
        },
        [authOperations.logOut.fulfilled](state, action) {
            state.userData = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.authenticated = false;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.userData = action.payload;
            state.isLoggedIn = false;
            state.authenticated = true;
        },
    },
});
export default authSlice.reducer;