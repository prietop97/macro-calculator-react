import React,{ useState } from 'react';
import { connect } from "react-redux"
import { login } from "../Redux/UserState/userActions"

const Login = ({login,history}) => {
    const [formValues,setFormValues] = useState({username: "" , password: ""})

    const handleChange = (e) =>{
        setFormValues({...formValues , [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        login(formValues)
        history.push("/Dashboard")
    }

        return (
        <div className= 'login'>
            <h1>Login </h1> 
            <form>
            <h2>Username:</h2>
                <input type='text' placeholder='Username' value={formValues.username} name="username" onChange={handleChange} />
            </form>
            <form>
            <h2>Password:</h2>
                <input type='password' placeholder='Password' value={formValues.password} name="password" onChange={handleChange} />
            </form>
            <button onClick={onSubmit}>Submit</button>
        </div>

    )

}

export default connect(null,{login})(Login)