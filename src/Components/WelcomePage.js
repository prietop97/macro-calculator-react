import React from 'react';
import { Link } from 'react-router-dom';


const WelcomePage = () => {

    return (
        <div>
            <div className = 'welcome'>
                {/* Fill in the name with the endpoints later */}
                <h3>Welcome {} !</h3>
            </div>
            <div className = 'need'>
                <h4>What You'll Need</h4>
                <p>Food Scale</p>
                <p>Body Weight Scale</p>
            </div>
            <div className = 'begin'>
                <h4>Let's Begin!</h4>
                <p>We'll need some basic information about you. Help us get to know your body and your needs so that we can design the diet that achieves your goals.</p>
            </div>
            <Link to='/Dashboard'>
            <button>Continue</button>
            </Link> 
        </div>
    )
}

export default WelcomePage;