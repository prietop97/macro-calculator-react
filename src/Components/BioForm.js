import React from 'react';
import styled from 'styled-components';
import {month, days, year, feets, inches}from './data.js';

const BioForm = (props) => {

    return (
        <BioFormContainer className= 'login'>
            <h2>Personal Info:</h2>
            <form>
                <div className = 'birthdate'>
                    <h3>Birthdate:</h3>
                    <div className = 'birthdate-inputs'>
                        <select className = 'month'>
                            <option value="not-accepted" required>Month</option>
                            {month.map((mon,index)=>(<option key={index} value={mon} >{mon}</option>))}
                        </select>
                        <select>
                            <option value="not-accepted" >Day</option>
                            {days.map((d, index )=> (<option key = {index} value = {d} required>{d}</option>))}
                        </select>
                        <select>
                            <option value="not-accepted">Year</option>
                            {year.map((y,index)=>(<option key={index} value={y} required>{y}</option>))}
                        </select>
                    </div>
                </div>
                <div className = 'height'>
                    <h3>Height: </h3>
                    <div className = 'height-inputs'>
                        <select className = 'left'>Ft
                            <option value="not-accepted" required>Feet</option>
                            {feets.map((f, index) => (<option key = {index} value = {f}>{f} ft</option>))}
                        </select>
                        <select className = 'right'>
                            <option value="not-accepted" required>Inches</option>
                            {inches.map((inch,index)=>(<option key={index} value={inch} required>{inch} in</option>))}
                        </select>
                    </div>
                </div>
                <div className = 'single-line'>
                    <h3>Weight:</h3>
                    <input className = 'input' type = 'text' placeholder = 'weight' required />
                <div className = 'single-line'>   
                    <h3>Gender: </h3>
                    <select required>
                        <option value="not-accepted">Please Choose An Option</option>
                        <option value = 'female'>Female</option>
                        <option value = 'male'>Male</option>
                    </select>
                </div>   
                <div className = 'single-line'>  
                    <h3>Exercise Amount:</h3>
                    <select>
                        <option value="not-accepted">Please Choose An Option</option>
                        <option value = 'none'>0 days per week</option>
                        <option value = 'light'> 1-2 days per week</option>
                        <option value = 'medium'>3-4 days per week</option>
                        <option value = 'moderate'>5-6 days per week</option>
                        <option value = 'heavy'>7 days per week</option>
                    </select>
                </div>
                <div className = 'single-line'>
                    <h3>Goals</h3>
                    <select>
                        <option value="not-accepted">Please Choose An Option</option>
                        <option value = 'aggressive'>Aggressive Weight Loss (20% deficit)</option>
                        <option value = 'moderate'>Moderate Weight Loss (15% deficit)</option>
                        <option value = 'light'>Light Weight Loss (10% deficit)</option>
                        <option value = 'maintain'>Maintain Current Weight</option>
                        <option value = 'moderate-gain'>Moderate Weight Gain (10% surplus)</option>
                        <option value = 'aggressive-gain'>Aggressive Weight Gain (15% surplus)</option>
                    </select>
                    </div>
                </div>
    
                <button onClick={(e)=>{
                    e.preventDefault()
                    props.history.push("/Dashboard")
                }}className= 'continue' >Continue</button>
            </form>
            
        </BioFormContainer>

    )

}



const BioFormContainer = styled.div`
    height: 60%;
    width: 100%;
    h2 {
    font-size: 4rem;
    width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        width: 100%;

        .birthdate {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 20%;
            
            h3 {
                display: flex;
                justify-content: flex-start;
                // padding-left: 2%;
                font-size: 2rem;
            }
            .birthdate-inputs {
                display: flex;
                justify-content: center;

            select {
                display: flex;
                width: 33%;
                padding: 1% 1%;
                margin: 0 auto;
            }
            }
        }
        .height{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 67%;
            height: 20%;

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
            }
            .height-inputs {
                display: flex;
                width:  100%;
                justify-content: space-between;
                
    

                .left {
                    width: 49.5%;
                    margin-right: 0.5%;
                    padding: 1% 1%;
                }
                .right {
                    width: 49.5%;
                    margin-right: 0.5%; 
                    padding: 1.5% 1%;
                    
                }
            }
        }
        .single-line {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 40%;
            margin: 0 auto;
           

            h3 {
                display: flex;
                justify-content: flex-start;
                font-size: 2rem;
                
            }
            .input, select {
                display: flex; 
                justify-content: flex-start; 
                width: 100%;
                padding: 1% 1%;
                margin: 0 auto;
            }   
            
        }
        .continue {
            display: flex;
            justify-content: center;
            border: none;
            width: 100%;
            background: white;
            border-radius: 4px;
            border: #db7c1e solid 1px;
            padding: 1%;
        }
    }
`

export default BioForm;