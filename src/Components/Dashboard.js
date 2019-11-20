import React,{ useEffect } from 'react'
import { connect } from "react-redux"
import { fetchStats } from "../Redux/UserStats/userStatsActions"
import {monthNames} from './data';
import styled from 'styled-components';
import Navbar from "./Navbar"

const Dashboard = ({userProfile, fetchStats, userInfo}) => {
    console.log(userProfile);

    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const month = monthNames[currentDate.getMonth()]
    const day = currentDate.getDate()
    console.log(month)
 

    useEffect(()=>{
        fetchStats(userProfile.user_id)
    },[])

    

    return (
        <>
        <Navbar />
        <DashboardContainer>
            <div>
                <div className="stats">
                
                    <h1> Daily Macronutrients</h1>
                    <div className="paragraphs">
                        <p>Protein: {userInfo.proteinGrams}g</p>
                        <p>Fats: {userInfo.fatsGrams}g</p>
                        <p>Carbohydrates: {userInfo.carbsGrams}g</p>
                    </div>
                    <h1>Total Daily Calories</h1>
                    <div className="paragraphs">
                        <p>{userInfo.totalCalories}cal</p>
                    </div>
                </div> 
                <div className="month">
                    <h1>{`${month} ${day}, ${year}`}</h1> 
                </div>
            
            
            </div>
            
            
                <div className="planning">
                    <div className='daysColumn'>
                        <h1 className='orange'>Monday</h1>
                        <h1>Tuesday</h1>
                        <h1>Wednesday</h1>
                        <h1>Thursday</h1>
                        <h1>Friday</h1>
                        <h1>Saturday</h1>
                        <h1>Sunday</h1>
                    </div>
                    <div className='fourImages'>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {"15g"}</p>
                            <p>Fats: {"5g"}</p>
                            <p>Carbohydrates: {"20g"}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {"15g"}</p>
                            <p>Fats: {"34g"}</p>
                            <p>Carbohydrates: {"12g"}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {"19g"}</p>
                            <p>Fats: {"64g"}</p>
                            <p>Carbohydrates: {"22g"}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {"17g"}</p>
                            <p>Fats: {"2g"}</p>
                            <p>Carbohydrates: {"99g"}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                    </div>
                </div>
        </DashboardContainer>
        </>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser,
    userInfo: state.userStats
})
export default connect(mapStateToProps,{fetchStats})(Dashboard)

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 100%;
    padding: 0 5%;

    div{
        display: flex;

        .stats{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            width: 60%

            
            h1{
                font-size: 2.5rem;
                font-family: 'Raleway', sans-serif;
                padding-bottom: 2%;
            }
            .paragraphs{
                display: flex;
                justify-content: space-evenly;
                font-size: 2rem;
                color: #4F4F4F;
                padding-bottom: 2%;

            }
        }
        .month{
            display: flex;
            justify-content: flex-end;
            width: 20%;
        }
    }
    .planning{ 
        display: flex;
        flex-direction: row;

        .daysColumn{
            display: flex;
            flex-direction: column;
            width: 30%;

            h1{
                font-size: 3rem;
                font-family: 'Raleway', sans-serif;

                &:hover{
                    color: #DB7C1E;
                }
            }
        }
        .fourImages{
            display: flex;
            flex-direction: column;
            width: 60%;
        }
    }    
`