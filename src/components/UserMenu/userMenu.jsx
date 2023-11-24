import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { authOperations } from 'redux/auth/auth-operations';
import {  DefaultImg, Container, Span, Button } from "../StylesAppBar.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  const handleLogOut = () => {
        dispatch(authOperations.logOut());
    };
  return (
    <Container>
        <picture><DefaultImg/></picture>
        <Span>Hello, {userName.UserMenu}</Span>
        <Button onClick={handleLogOut}>Log Out</Button>
       
      
    </Container>
  )
}


