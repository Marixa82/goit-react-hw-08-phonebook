import React from 'react';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/route';
import { Link } from "./StylesAppBar.styled";
// import { NavLink } from "react-router-dom";

export const AuthNav = () => {
    return (
        <div>
            <Link to={LOGIN_ROUTE}>Login</Link>
            <Link to={REGISTER_ROUTE}>Registration</Link>
        </div>
    )
}


