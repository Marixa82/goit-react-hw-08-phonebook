import styled from '@emotion/styled';
import { FaJenkins } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
    align-items: center;
    border-bottom: 1px solid #2A363B;
    `

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight:700;
  color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`

const Container = styled.div`
display: flex;
align-items: center;

 `
const Div = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 12px;

 `
const Span = styled.span`
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
font-weight: 700;
margin-right: 12px;`

const DefaultImg = styled(FaJenkins)`
width: 40px;
  height: 40px;
  /* object-fit: cover; */
  color: #F5FFFA;
  border-radius: 50%;
  margin-right: 4px;
  /* background-color: #e9d362; */
  background: linear-gradient(
    to right, 
     #e9d362 0%,
    #333333 30%, 
    #e9d362 100%);
    
    `

const Button = styled.button`
  background: linear-gradient(
    to right, 
     #e9d362 0%,
    #333333 51%, 
    #e9d362 100%);
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export { Header, Div, Link, DefaultImg, Span, Container, Button }