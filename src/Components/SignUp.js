import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../Redux/UserState/userActions";
import Header from "./Header";

const SignUp = ({ signUp, history, error, isFetching }) => {
  console.log(isFetching);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    fullname: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    signUp(formValues, history);
  };

  return (
    <>
      <SignUpContainer>
        <Header />
        <div className="container">
          <h2>Create Account</h2>
          <p>{error}</p>
          <form onSubmit={onSubmit}>
            <h3>Full Name</h3>
            <input
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              name="fullname"
              value={formValues.fullname}
            />

            <h3>Username:</h3>
            <input
              type="username"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={formValues.username}
            />

            <h3>Password:</h3>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={formValues.password}
            />
            <button
              disabled={isFetching}
              type="submit"
              className="continue"
              style={{ marginTop: "3rem" }}
            >
              {isFetching ? (
                <i className="fa fa-refresh fa-spin"></i>
              ) : (
                "Submit"
              )}
            </button>
          </form>
          <h3>Already Have An Account?</h3>
          <MyLink to="/Login">
            <button className="create">Log In</button>
          </MyLink>
        </div>
      </SignUpContainer>
    </>
  );
};

const MyLink = styled(Link)`
  text-decoration: none;
`;

const SignUpContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 4rem;
    width: 100%;
    font-family: "Raleway", sans-serif;
    padding-bottom: 2%;
  }

  h3 {
    font-family: "Raleway", sans-serif;
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
    padding-bottom: 1.5rem;

    h3 {
      display: flex;
      justify-content: flex-start;
      font-size: 2rem;
      font-family: "Raleway", sans-serif;
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
    font-family: "Raleway", sans-serif;
    margin-bottom: 2%;
    margin-top: 1rem;

    &:hover {
      background: #db7c1e;
      color: white;
      cursor: pointer;
    }
  }
  .create {
    width: 20vw;
    padding: 1rem;
  }
`;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    error: state.userState.error,
    isFetching: state.userState.isFetching,
  };
};
export default connect(mapStateToProps, { signUp })(SignUp);
