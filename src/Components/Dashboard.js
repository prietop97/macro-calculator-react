import React,{ useEffect } from 'react'
import { connect } from "react-redux"
import { fetchStats } from "../Redux/UserStats/userStatsActions"
import {monthNames} from './data';
import styled from 'styled-components';
import Navbar from "./Navbar";
import TwoSnacks from './TwoSnacks';

const Dashboard = ({userProfile, fetchStats, userInfo}) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear()
    const month = monthNames[currentDate.getMonth()]
    const day = currentDate.getDate()

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
                        <h2 className='orange'>Monday</h2>
                        <h2>Tuesday</h2>
                        <h2>Wednesday</h2>
                        <h2>Thursday</h2>
                        <h2>Friday</h2>
                        <h2>Saturday</h2>
                        <h2>Sunday</h2>
                    </div>
                    <div className='imagesColumn'>
                        <TwoSnacks />
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
                font-size: 4rem;
                font-family: 'Raleway', sans-serif;
                padding-bottom: 2%;
                font-weight: 900;
            }
            .paragraphs{
                display: flex;
                justify-content: space-evenly;
                font-size: 3rem;
                font-weight: 600;
                color: #4F4F4F;
                padding-bottom: 2%;

            }
        }
        .month{
            display: flex;
            justify-content: flex-end;
            width: 20%;

            h1{
                font-size: 3.8rem;
                font-family: 'Raleway', sans-serif;
                padding-bottom: 2%;
                font-weight: 900;
            }
        }
    }
    .planning{ 
        display: flex;
        flex-direction: row;
        padding-top: 5%;

        .daysColumn{
            display: flex;
            flex-direction: column;
            width: 30%;

            h2{
                font-size: 5rem;
                font-family: 'Raleway', sans-serif;
                padding-bottom: 2%;

                &:hover{
                    color: #DB7C1E;
                }
            }
        }
        .imagesColumn{
            width: 65%;
        }

    }    
`