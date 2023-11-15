import React from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import { UserMenu } from './UserMenu/userMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import { Header } from './StylesAppBar.styled';


export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.selectUserIsLoggedIn);
    return (
        <Header >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header >

    )
}


