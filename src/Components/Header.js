import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <HeaderContainerContainer className="ui centered">
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
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1%;
  font-family: 'Saira Extra Condensed', sans-serif;
  color: #db7c1e !important;
  font-size: 40px;
  width: 100%;
  z-index: 2;
  @media screen and (max-width: 500px) {
    font-size: 33px;
  }
`;
