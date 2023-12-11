import styled from '@emotion/styled';
import { Form } from 'formik';


// const FormViews = styled(Formik)`
// text-align: center;
// max-width:250px;
// border: 1px solid black;
// padding:20px;
// border-radius: 10px;
// display:flex;
// flex-direction:column;
// gap:10px;
// background-color: rgba(0, 0, 0, 0.3);
// `
const FormField = styled(Form)`
text-align: center;
 width: 95%;
  max-width: 400px;
  margin: 0 auto;
border: 1px solid black;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:10px;
background-color: rgba(0, 0, 0, 0.3);
`
const FormViews = styled.form`
text-align: center;
max-width:250px;
border: 1px solid black;
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
background-color: rgba(0, 0, 0, 0.3);
`
const ButtonViews = styled.button`
  background-color: #333333;
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-color:#e9d362;
    color: #333333;
    text-decoration: none;
  }
`;

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
/* text-align: center; */
color: #F5FFFA;
margin-left: auto;
margin-right: auto;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  `
const P = styled.p`
background-color: rgba(0, 0, 0, 0.3);
font-weight: 500;
max-width: 200px; 
border-radius: 10px;
padding: 5px;
text-align: center;
border:1px solid black;
&:hover{
color: #e9d362;
}`

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
// const Input = styled(Field)`
//  /* font-size: 10px;
// width:200px;
// height:20px;
// border-radius: 5px;
// border: none;
// outline:none; */
// width: 100%;
//   padding: 0.65rem 0.5rem;
//   font-size: 1rem;
//   color: #2d3748;
//   border: 2px solid #4a5568;
//   /* background-color: #2d3748; */
//   border-radius: 10px;
//   outline: none;
// &:focus {
//   /* background-color: #e9d362;
//     color: #333333; */
//     border-color: #4299e1;
//   };
//   &::grammar-error{
//      border-color: #fc8181;
//   }
//   &::placeholder {
//     color: #a0aec0;
//   }
//  `
const Input = styled.input`
 font-size: 10px;
width:200px;
height:20px;
border-radius: 5px;
border: none;
outline:none;

&:hover {
  background-color: #e9d362;
    color: #333333;
  }
 `
const Span = styled.span`
 margin-top: 15px;
 font-weight: 500;
 
 &:hover{

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
color: #e9d362;
}`

const Error = styled.div`
  color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;

 `

export { Container, Title, Div, ButtonViews, FormViews, Input, H2, P, Span, Error, FormField }
