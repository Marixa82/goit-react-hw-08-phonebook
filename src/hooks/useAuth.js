import { useSelector } from "react-redux/es/hooks/useSelector";
import authSelectors from "redux/auth/auth-selectors";

const useAuth = () => {
    return {
        isLoggedIn: useSelector(authSelectors.selectUserIsLoggedIn),
        isRefreshing: useSelector(authSelectors.selectUserRefreshing),
        user: useSelector(authSelectors.selectUserName),
    }

}
export default useAuth;