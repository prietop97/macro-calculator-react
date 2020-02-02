import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Header from './Header';

const WelcomePage = ({ currentUser }) => {
  return (
    <>
      <WelcomeContainer>
        <Header />
        <div className="welcome">
          {/* Fill in the name with the endpoints later */}
          <h3>
            Welcome <span>{currentUser.fullname}</span>
          </h3>
          {/* //<h3 className="name"> {currentUser.fullname}!</h3> */}
        </div>
        <div className="need">
          <h4>What you'll need</h4>
          <p>Food Scale</p>
          <p>Body Weight Scale</p>
        </div>
        <div className="begin">
          <h4>Let's begin!</h4>
          <p>
            We'll need some basic information about you. Help us get to know
            your body and your needs so that we can design the diet that
            achieves your goals.
          </p>
        </div>
        <MyLink to="/Biometrics">
          <button className="continue">Continue</button>
        </MyLink>
      </WelcomeContainer>
    </>
  );
};

const mapStateToProps = state => ({
  currentUser: state.userState.currentUser
});
export default connect(mapStateToProps)(WelcomePage);

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 100vh;
    margin: 0 auto;

    .welcome {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin: 2rem 0;
        h3 {
            font-size: 3rem; 
            font-family: 'Raleway', sans-serif;
        }
        .name{
            margin-left: 0.4%;
            font-family: 'Raleway', sans-serif;
        }
    }
    .need {
        margin: 2rem 0;
        h4 {
            font-size: 2.5rem;
            font-family: 'Raleway', sans-serif;
        }
        p {
            font-size: 2rem;
            color: grey;
        }
    }
    .begin {
        margin: 2rem 0;
        h4{
            font-size: 2.5rem;
            font-family: 'Raleway', sans-serif;
        }
        p {
            font-size: 2rem;
            color: grey;
            font-family: 'Raleway', sans-serif;
            width: 100%;
        }
    }
    .continue{
        display: flex;
        justify-content: center;
        width: 100%;
        background: white;
        border-radius: 4px;
        border: #db7c1e solid 1px;
        padding: 1rem;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background: #db7c1e;
            color: white;
            cursor: pointer;
        }
    }

`;

const MyLink = styled(Link)`
  text-decoration: none;
`;
