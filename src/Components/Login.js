import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Redux/UserState/userActions';
import styled from 'styled-components';
import Header from './Header';

const Login = ({ login, history, error }) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(formValues, history);
    } catch (error) {
      setErrorMsg('Try Again');
      setTimeout(() => {
        setErrorMsg('');
      }, 5000);
    }
  };

  return (
    <>
      <LoginContainer className="login">
        <Header />
        <h2>Login </h2>
        <p>{error}</p>
        <form onSubmit={handleSubmit}>
          <h3>Username:</h3>
          <input
            type="text"
            placeholder="Username"
            value={formValues.username}
            name="username"
            onChange={handleChange}
          />

          <h3>Password:</h3>
          <input
            type="password"
            placeholder="Password"
            value={formValues.password}
            name="password"
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            className="continue"
            style={{ marginTop: '2rem' }}
          >
            Submit
          </button>
        </form>
        <h3>Don't Have An Account Yet?</h3>
        <MyLink to="/SignUp">
          <button class="create">Create Account</button>
        </MyLink>
      </LoginContainer>
    </>
  );
};

const mapStateToProps = state => ({
  error: state.userState.error
});
export default connect(mapStateToProps, { login })(Login);

const MyLink = styled(Link)`
  text-decoration: none;
`;

const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4rem;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 2%;
  }

  h3 {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3rem;
    display: flex;
    justify-content: center;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  p {
    color: red;
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    width: 100%;
    padding-bottom: 2%;

    h3 {
      display: flex;
      justify-content: flex-start;
      font-size: 2rem;
      font-family: 'Raleway', sans-serif;
      padding-bottom: 1%;
    }

    input {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 1rem 1rem;
      margin: 0 auto;
      border: 1px solid black;
      border-radius: 4px;
      box-shadow: none;
    }
  }

  button {
    display: flex;
    justify-content: center;
    width: 100%;
    background: white;
    border-radius: 4px;
    border: #db7c1e solid 1px;
    padding: 1rem;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 2%;

    &:hover {
      background: #db7c1e;
      color: white;
      cursor: pointer;
    }
  }
  .create {
    width: 20vh;
    padding: 1rem;
  }
`;
