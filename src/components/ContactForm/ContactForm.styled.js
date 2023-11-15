import styled from '@emotion/styled';

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
`
const Label = styled.label`
font-weight: bold;
font-size: 20px;
display:flex;
flex-direction:column;
`
const Form = styled.form`
max-width:400px;
border: 2px solid black;
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
background-color: rgba(0, 0, 0, 0.3);
`
const Input = styled.input`
font-size: 10px;
width:200px;
height:20px;
border-radius: 5px;
outline:none;
background-image: linear-gradient(to right, #EFEFBB 0%, #FFFFFF 51%, #e9d362 100%);
&:active {
    background-position: right center;
    color: #000;
    text-decoration: none;
  }
`

const Span = styled.span`
margin-bottom: 5px;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`

export { Input, Form, Label, Button, Span }