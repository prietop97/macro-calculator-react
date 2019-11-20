import React from 'react';
import Header from './Header';

const UserProfile = () => {
//get endpoint from backend 
//map through it
//display within card
    return (
        <>
        <Header />
        <div>
            <h2>Welcome Back 'user'</h2>
            <div>
                <h4>Gender</h4>
                {/* <p>{this.gender}</p> */}

                <h4>Age:</h4>
                {/* <p>{this.age}</p> */}

                <h4>Height</h4>
                {/* <p>{`${this.ft}ft${this.in}in`}</p> */}

                <h4>Current Weight</h4>
                {/* <p>{this.weight}</p> */}

                <h4>Exercise Amount</h4>
                {/* <p>{this.amount}</p> */}

                <h4>Your Goals</h4>
                {/* <p>{this.goals}</p> */}
            </div>
        </div>
        </>
    )
}