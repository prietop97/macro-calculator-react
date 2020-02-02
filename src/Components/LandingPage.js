import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const LandingPage = () => {
  return (
    <>
      <LandingPageContainer>
        <Header />
        <MyLink to="/Login">
          <button className="log">Log In</button>
        </MyLink>
        <MyLink to="/SignUp">
          <button>Create Account</button>
        </MyLink>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;

const LandingPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    border: none;
    width: 60vw;
    background: white;
    border-radius: 4px;
    border: #db7c1e solid 1px;
    padding: 1%;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 2%;
    @media screen and (max-width: 800px) {
      padding: 1rem;
      width: 90vw;
    }

    &:hover {
      background: #db7c1e;
      color: white;
      cursor: pointer;
    }
  }
`;
const MyLink = styled(Link)`
  text-decoration: none;
`;
