const selectUserIsLoggedIn = state => state.auth.isLoggedIn;
const selectUserName = state => state.auth.userData;
const selectUserToken = state => state.auth.token;
// const selectUserAuthenticated = state => state.auth.authenticated;



const authSelectors = {
    selectUserIsLoggedIn,
    selectUserName,
    selectUserToken,
};
export default authSelectors;