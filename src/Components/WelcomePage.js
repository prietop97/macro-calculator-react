import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import styled from 'styled-components';


const WelcomePage = ({currentUser}) => {

    return (
        <WelcomeContainer>
            <div className = 'welcome'>
                {/* Fill in the name with the endpoints later */}
                <h3>Welcome !</h3>
                <h3 className="name">{currentUser}</h3>
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
            <MyLink to='/Biometrics'>
            <button className = 'continue'>Continue</button>
            </MyLink> 
        </WelcomeContainer>
    )
}

const mapStateToProps = state => ({
    currentUser: state.userState.currentUser
})
export default connect(mapStateToProps)(WelcomePage);

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 90%;
    height: 60vh;
    margin: 0 auto;

    .welcome {
        justify-content: flex-start;
        h3 {
            font-size: 2.5rem; 
        }
        .name{
            margin-left: 2%;
        }
    }
    .need {
        padding-left: 20%;

        h4 {
            font-size: 2rem;
        }
        p {
            font-size: 1.7rem;
            color: grey;
        }
    }
    .begin {
        padding-left: 45%;
        h4{
            font-size: 2rem;
        }
        p {
            font-size: 1.7rem;
            color: grey;
        }
    }
    .continue{
        display: flex;
        justify-content: center;
        border: none;
        width: 100%;
        background: #db7c1e;
        border-radius: 4px;
        border: #db7c1e solid 1px;
        padding: 1%;
        text-decoration: none;
    }

`

const MyLink = styled(Link) `
    text-decoration: none;
`