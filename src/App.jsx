import { NavLink, Route, Routes } from "react-router-dom"
import { appRoutes, CONTACTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "./constants/route";
import { Suspense, lazy, useEffect } from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import authSelectors from "redux/auth/auth-selectors";
import { authOperations } from "redux/auth/auth-operations";
// import NotFound from "views/NotFound";

const NotFoundView = lazy(() => import('views/NotFound'));

export const AppBar = () => {
    const dispatch = useDispatch();
    const authenticated = useSelector(authSelectors.selectUserAuthenticated);
    const userData = useSelector(authSelectors.selectUserName);


    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);
    const handleLogOut = () => {
        dispatch(authOperations.logOut());
    };
    return (
        <div>
        <header>
            <nav>
                <NavLink to={HOME_ROUTE}>Home</NavLink>
                {authenticated ? (
                    <>
                        <NavLink to={CONTACTS_ROUTE}>Contacts</NavLink>
                        <span>Hello, {userData.name}</span>
                        <button onClick={handleLogOut}>Log Out</button>
                    </>
                ) : (
                    <>
                        <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                        <NavLink to={REGISTER_ROUTE}>Registration</NavLink>
                    </>
                )}
            </nav>
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
                    <Route path='*' element={<NotFoundView />} />
                </Routes>
            </Suspense>
        </main>
    </div>
    )
    
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
