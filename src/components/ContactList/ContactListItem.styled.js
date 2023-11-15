import styled from '@emotion/styled';

export const Li = styled.li`
max-width:400px;
display:flex;
justify-content: space-between;
margin-bottom: 10px;
align-items: center;
  gap: 5px;
  color: #F5FFFA;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);`

export const Button = styled.button`

 background: linear-gradient(
    to right, 
     #e9d362 0%,
    #333333 51%, 
    #e9d362 100%);
  margin: 10px;
  padding: 5px 10px;
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
  
  }`

export const Span = styled.span`
  font-weight: 400;
  /* display: flex;
  justify-content: flex-start; */
  /* font-size: 15px; */
`