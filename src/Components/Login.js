import React,{ useState } from 'react';
import { connect } from "react-redux"
import { signupFirstStep } from "../Redux/UserState/userActions"



const Login = (props) => {
    const [formValues,setFormValues] = useState({email: "" , password: ""})

    const handleChange = (e) =>{
        setFormValues({...formValues , [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

        return (
        <div className= 'login'>
            <h1>Login </h1> 
            <form>
            <h2>Username:</h2>
                <input type = 'email' placeholder = 'Email' value={formValues.email} name="username" onChange={handleChange} />
            </form>
            <form>
            <h2>Password:</h2>
                <input type = 'password' placeholder = 'Password'value={formValues.password} name="password" onChange={handleChange} />
            </form>
            <button>Submit</button>
        </div>

    )

}

export default connect(null,{})(Login)