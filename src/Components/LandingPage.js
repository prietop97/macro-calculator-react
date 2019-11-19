import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = () => {

    return(
        <div>
            <Link to="/Login">
                <button>Log In</button>
            </Link>
            <Link to="/SignUp">
                <button>Create Account</button>
            </Link>
        </div>       

    )
}

export default LandingPage;