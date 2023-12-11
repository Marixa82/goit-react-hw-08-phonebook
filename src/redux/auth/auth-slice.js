import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
    userData: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            // state.isRefreshing = false;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            // state.isRefreshing = true;

        },
        [authOperations.logOut.fulfilled](state) {
            state.userData = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            // state.isRefreshing = false;
        },
        [authOperations.fetchCurrentUser.pending](state) {
            state.isRefreshing = true;
        },
        [authOperations.fetchCurrentUser.fulfilled](state, action) {
            state.userData = action.payload.userData;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [authOperations.fetchCurrentUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});
export default authSlice.reducer;