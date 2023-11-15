import { Route, Routes } from "react-router-dom"
import { appRoutes } from "./constants/route";
import { Suspense, useEffect } from "react";
import {AppBar} from "components/AppBar";
import { useDispatch} from "react-redux";
import { authOperations } from "redux/auth/auth-operations";
import { Loader } from "components/Loader/Loader";
import { NotFound } from ".//views/NotFound";
import { Container, Header } from "App.styled";

 
//   
// const NotFound = lazy(() => import('.//views/NotFound'));


 export const App = () => {
    const dispatch = useDispatch();
    


    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);
    
    return (
        <Container>
            <Header>
                <AppBar/>
            </Header>
            <main>
                <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Suspense>
                
            </main>
        </Container>
        
    )
    
}
/* <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
                        <Route path='*' element={<NotFoundView />} />
                    </Routes>
                </Suspense> */
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
