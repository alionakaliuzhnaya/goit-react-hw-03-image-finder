import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi';


export const FixedHeader =styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: rgb(236, 243, 243);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);` 
  
  
  

  export const SearchForm =styled.form` display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  `
   

  export const Input =styled.input`
  display: inline-block;
  width: 400px;
  height: 50px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-color: rgb(190, 214, 235);
  ;` 


  export const FormButton =styled.button`
   
  background-color: rgb(190, 214, 235);
  border-color: rgb(182, 236, 236);
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
 
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;;`
   
  
  export const SearchAlt = styled(BiSearchAlt)`
  width:40px;
  heigth:40px`