import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Snacks = props => {
    return(
        <SnacksContainer>
            <div className='macros'>
                <h2>Snack {props.snackNumber}:</h2>
                <h4>Protein: {props.userInfo.snackProtein} g</h4>
                <h4>Fats: {props.userInfo.snackFats} g</h4>
                <h4>Carbs: {props.userInfo.snackCarbs} g</h4>

            </div>
            <div className='image'>
                <img src={props.img} alt="yum" />
            </div>
        </SnacksContainer>
    )
}

const mapStateToProps = state => ({
    userInfo: state.userStats.Macros
})
export default connect(mapStateToProps)(Snacks);

const SnacksContainer = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 5%;

    .macros{
        width: 50%;
        flex-direction: column;
        

        h2{
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
        }
        h4{
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            color: #4F4F4F;
        }
    }

    .image{
        width: 50%;

        img{
            width: 210px;
            height: 150px;
        }
    }
`
