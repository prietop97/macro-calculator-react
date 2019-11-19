import React,{ useState } from 'react';

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
        <div className= 'login'>
            <h1>SignUp</h1> 
            <form>
            <h2>Username:</h2>
                <input type='username' placeholder='Username' onChange={handleChange} name="username" value={formValues.username} />
            </form>
            <form>
            <h2>Password:</h2>
                <input type='password' placeholder = 'Password' onChange={handleChange} name="password" value={formValues.password} />
            </form>
            <button onClick={onSubmit}>Submit</button>
        </div>

    )

}

export default connect(null,{signUp})(SignUp);