import styled from '@emotion/styled';

const FormViews = styled.form`
text-align: center;
max-width:250px;
border: 2px solid black;
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
background-color: rgba(0, 0, 0, 0.3);
`
const ButtonViews = styled.button`
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

const Div = styled.div`
margin-top: 20px;
text-align: center;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  `
const Title = styled.h1`
font-weight: 500;

margin: 15px 0px;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  `
const H2 = styled.h2`
font-weight: 400;
margin: 10px 0;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  `
const Container = styled.div`

    display: flex;
align-items: center;
flex-direction: column;
    
`
const Input = styled.input`
 border-radius: 5px;
  outline: none;
  background-image: linear-gradient(to right, #EFEFBB 0%, #FFFFFF 51%, #e9d362 100%);
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff; /* Змініть на колір, який ви хочете при введенні тексту */
  }
 `
export { Container, Title, Div, ButtonViews, FormViews, Input, H2 }
