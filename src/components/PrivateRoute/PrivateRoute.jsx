import React from 'react';
import { LOGIN_ROUTE } from 'constants/route';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = { LOGIN_ROUTE } }) => { 
    const authenticated = useSelector(authSelectors.selectUserAuthenticated);

    
    return (
        authenticated ? children : <Navigate to={redirectTo} replace />  
  )
}

export default PrivateRoute;
