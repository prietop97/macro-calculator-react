import React,{ useState } from 'react';
import { connect } from "react-redux";
import { login } from "../Redux/UserState/userActions";
import styled from 'styled-components';
import Header from './Header';

const Login = ({login,history}) => {
    const [formValues,setFormValues] = useState({username: "" , password: ""})

    const handleChange = (e) =>{
        setFormValues({...formValues , [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        login(formValues,history)
    }

    return (
        <>
        <Header />
        <LoginContainer className= 'login'>
            <h2>Login </h2> 
            <form>
                <h3>Username:</h3>
                <input type='text' placeholder='Username' value={formValues.username} name="username" onChange={handleChange} />
            </form>
            <form>
                <h3>Password:</h3>
                <input type='password' placeholder='Password' value={formValues.password} name="password" onChange={handleChange} />
            </form>
            <button onClick={onSubmit}>Submit</button>
        </LoginContainer>
        </>
    )

}

export default connect(null,{login})(Login)

const LoginContainer = styled.div`
    height: 60vh;
    width: 100%;
    padding: 5%;
    
    h2{
        font-size: 4rem;
        width: 100%;
        font-family: 'Raleway', sans-serif;
        padding-bottom: 2%;
    }
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto;
        width: 100%;
        padding-bottom: 2%;

        h3{ 
            display: flex;
            justify-content: flex-start;
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            padding-bottom: 1%;
        }

        input{
            display: flex;
            justify-content: flex-start;
            width: 100%;
            padding: 1% 1%;
            margin: 0 auto;
            border: 1px solid black;
            border-radius: 4px;
            box-shadow: none;
        }

    }

    button{
        display: flex;
        justify-content: center;
        width: 100%;
        background: white;
        border-radius: 4px;
        border: #db7c1e solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 2%;

        &:hover{
            background: #db7c1e;
        }
    }
`