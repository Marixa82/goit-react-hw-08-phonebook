import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
// import { CONTACTS_ROUTE } from 'constants/route';
import {  DefaultImg, Container, Span, Button } from "../StylesAppBar.styled";
// import { NavLink } from "react-router-dom";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  const handleLogOut = () => {
        dispatch(authOperations.logOut());
    };
  return (
    <Container>
        <picture><DefaultImg/></picture>
        <Span>Hello, {userName.name}</Span>
        <Button onClick={handleLogOut}>Log Out</Button>
       
      
    </Container>
  )
}


