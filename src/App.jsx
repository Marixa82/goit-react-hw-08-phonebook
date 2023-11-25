import { Route, Routes } from "react-router-dom"
import { appRoutes } from "./constants/route";
import { Suspense, useEffect, lazy } from "react";
import {AppBar} from "components/AppBar";
import { useDispatch} from "react-redux";
import  {authOperations}  from "redux/auth";
import { Loader } from "components/Loader/Loader";
import { Container, Header } from "App.styled";

const NotFound = lazy(() => import('../src/views/NotFound'));

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
