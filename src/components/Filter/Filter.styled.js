import styled from '@emotion/styled';

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
  }`
const Span = styled.span`
margin-bottom: 5px;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`
const Label = styled.label`
padding: 20px;
font-weight: bold;
display:flex;
flex-direction:column;
gap:10px;
align-items:flex-start;
justify-content: flex-start;
`
const Div = styled.div`
display: flex;
text-align: center;`
export { Span, Label, Input, Div }