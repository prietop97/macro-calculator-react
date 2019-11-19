import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <header className='ui centered'>
        <HeaderContainer>
      <h1>Macro Calculator</h1> 
      </HeaderContainer>
    </header>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10%;
  background: white;
  font-family: 'Saira Extra Condensed', sans-serif;
  color: #DB7C1E;
  font-size: 50 px;
`