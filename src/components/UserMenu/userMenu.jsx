import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import {  DefaultImg, Container, Span, Button } from "../StylesAppBar.styled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const handleLogOut = () => {
        dispatch(authOperations.logOut());
    };
  return (
    <Container>
        <picture><DefaultImg/></picture>
        <Span>Hello, {name.name}</Span>
        <Button onClick={handleLogOut}>Log Out</Button>
       
      
    </Container>
  )
}


