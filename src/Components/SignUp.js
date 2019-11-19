import React,{ useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux"
import { signUp } from "../Redux/UserState/userActions"

const SignUp = ({signUp , history}) => {
    const [formValues,setFormValues] = useState({username: "" , password: ""})

    const handleChange = (e) => {
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        signUp(formValues,history)
    }
    console.log(formValues)

    return (
        <SignUpContainer>
        <div className= 'login'>
            
            <h1>Create Account</h1> 
            <form>
            <h2>Full Name</h2>
                <input type="text" placeholder="Full Name" onChange={handleChange} name="fullname" value={formValues.fullname} />
            </form>
            <form>
            <h2>Username:</h2>
                <input type='username' placeholder='Username' onChange={handleChange} name="username" value={formValues.username} />
            </form>
            <form>
            <h2>Password:</h2>
                <input type='password' placeholder = 'Password' onChange={handleChange} name="password" value={formValues.password} />
            </form>
            <button className='continue' onClick={onSubmit}>Submit</button>
            <button className='continue'>Continue</button>
            
        </div>
        </SignUpContainer>

    )

}


const SignUpContainer = styled.div`
    height: 60%;
    width: 80%;
    justify-content: center;
    h1 {
        font-size: 4rem;
        width: 100%;
        font-family: 'Raleway', sans-serif;
        padding-bottom: 5%;
        }
    h2 {
    font-size: 4rem;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 100%;

        .birthdate {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 20%;
            
            h3 {
                display: flex;
                justify-content: flex-start;
                // padding-left: 2%;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
            }
            .birthdate-inputs {
                display: flex;
                justify-content: center;

            select {
                display: flex;
                width: 33%;
                padding: 1% 1%;
                margin: 0 auto;
            }
            }
        }
        .height{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 67%;
            height: 20%;

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
            }
            .height-inputs {
                display: flex;
                width:  100%;
                justify-content: space-between;
                
    

                .left {
                    width: 49.5%;
                    margin-right: 0.5%;
                    padding: 1% 1%;
                }
                .right {
                    width: 49.5%;
                    margin-right: 0.5%; 
                    padding: 1.5% 1%;
                    
                }
            }
        }
        .single-line {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 40%;
            margin: 0 auto;
           

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
                font-family: 'Raleway', sans-serif;
                
            }
            .input, select {
                display: flex; 
                justify-content: flex-start; 
                width: 100%;
                padding: 1% 1%;
                margin: 0 auto;
            }   
            
        }
        .continue {
            display: flex;
            justify-content: center;
            border: none;
            width: 100%;
            background: white;
            border-radius: 4px;
            border: #db7c1e solid 1px;
            padding: 1%;
            font-family: 'Raleway', sans-serif;
        }
    }
    

.login {
    text-align: center;
    border: 2px solid black;
    padding: 5%;
  }
  
`

export default connect(null,{signUp})(SignUp);