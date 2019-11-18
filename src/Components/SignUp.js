import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formValues,setFormValues] = useState({name: "" , username: "" , password: ""})

    return (
        <div className= 'login'>
            <h1> SignUp </h1> 
            <form>
            <h2 className= ''>Username:</h2>
                <input type = 'text' placeholder = 'name'/>
            </form>
            <form>
            <h2 className= ''>Password:</h2>
                <input type = 'text' placeholder = 'name'/>
            </form>
            <Link to='/WelcomePage'>
            <button className= '' >Submit</button>
            </Link> 
        </div>

    )

}

export default SignUp;