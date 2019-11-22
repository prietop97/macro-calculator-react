import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header(props) {
  return (
    <HeaderContainerContainer className='ui centered'>
      <LinkContainer>
      <MyLink>
        
        <a href="https://infallible-albattani-8d730d.netlify.com/"> 
        <img src={logo} alt="logo" />
                </a>
            </MyLink>
            </LinkContainer>
        <HeaderContainer>
      <h1>Macro Calculator</h1> 
      </HeaderContainer>
      
    </HeaderContainerContainer>
  );
}



//<a href="https://infallible-albattani-8d730d.netlify.com/"></a>">

const HeaderContainerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const LinkContainer = styled.div`
  position: absolute;
  left: 5%;
  top: 4.5%;
  z-index: 4;
`

const MyLink = styled(Link)`
        text-decoration: none;
        padding-top: 10%;
        width: 20%;
`

const HeaderContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1%;
  font-family: 'Saira Extra Condensed', sans-serif;
  color: #DB7C1E;
  font-size: 40px;
  width: 100%;
  z-index: 2;

`