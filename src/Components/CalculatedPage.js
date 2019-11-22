import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import salmon from '../img/salmon.jpg';
import { Link } from "react-router-dom"
import Header from './Header';


const CalculatedPage = ({userInfo}) => {
    // console.log(userInfo);
    return (
        <>
        <Header />
        <CalculatedContainer>
            <h2>Based on the information given, your daily intake of macronutrients has been calculated for you.</h2>
            <div className="row">
                <div className="text">
                    <h3>Daily Macros: </h3>
                    <div>
                        <p>Protien: {userInfo.proteinGrams}g</p>
                        <p>Fat: {userInfo.fatsGrams}g</p>
                        <p>Carbs: {userInfo.carbsGrams}g</p>
                    </div>
                    <h3>Total Daily Calories: </h3>
                    <div>
                        <p>{userInfo.totalCalories}cal</p>
                    </div>
                </div>
                <div className="image">
                    <img src={salmon} alt="salmon" />
            </div>

            </div>
            

            <h1>We will now curate a weekly meal plan based on your numbers. Your daily macronutrients will be automatically calculated between the meals you choose per day.</h1>
            <Link to="/Dashboard"><button className='continue'>Continue</button></Link>
        </CalculatedContainer>
        </>
    )
}

const mapStateToProps = state => ({
    userInfo: state.userStats
})
export default connect(mapStateToProps,{})(CalculatedPage);

const CalculatedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90rem;
    width: 100%;
    padding: 0 5%;

    h2{
        display: flex;
        justify-content: flex-start;
        font-size: 3.5rem;
        color: #948F8F;
        //need to fix font-family
        font-family: 'Saira ExtraCondensed' ;
    }

    .row{
        display: flex;
        
        .text{
            width: 50%;
            padding-top: 10%;

         
                h3{
                    font-size: 3rem;
                    font-family: 'Raleway', sans-serif;

                }
                div{
                    padding-bottom: 5%;
                p{
                    font-size: 2.5rem;
                    font-family: 'Raleway', sans-serif;
                    padding-left: 45%;
                }
            }
        }
        .image{
            width: 50%;
        }
        
    }
    h1{
        display: flex;
        justify-content: flex-start;
        font-size: 4rem;
        color: #948F8F;
        font-family: 'Raleway', sans-serif ;
    }
    .continue{
        display: flex;
        justify-content: center;
        border: none;
        width: 100%;
        background: white;
        border-radius: 4px;
        border: #db7c1e solid 1px;
        padding: 1%;
        font-family: 'Raleway', sans-serif;

        &:hover{
            background: #db7c1e;
            color: white;
            cursor: pointer;
        }
    }
`