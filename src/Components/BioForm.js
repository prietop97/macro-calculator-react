import React,{useState} from 'react';
import styled from 'styled-components';
// import useForm from '../Utils/useForm';
import {month, days, year, feets, inches}from './data.js';
import { Link } from 'react-router-dom';


const BioFormContainer = styled.div`
    h2 {
    font-size: 7rem;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80%;

        .birthdate {

        }
    }
`


// const Form = styled.form`
//     overflow: auto;
//     display: flex;
//     flex-direction: column;

//     h3 {
//         font-size: 2rem;
//     }
//     `


const BioForm = () => {

    return (
        <BioFormContainer className= 'login'>
            <h2>Personal Info:</h2>
            <form>
                <div className = 'birthdate'>
                    <h3>Birthdate:</h3>
                    <select className = 'month'>
                        <option value="not-accepted">Month</option>
                        {month.map((mon,index)=>(<option key={index} value={mon}>{mon}</option>))}
                    </select>
                    <select>
                        <option value="not-accepted" >Day</option>
                        {days.map((d, index )=> (<option key = {index} value = {d}>{d}</option>))}
                    </select>
                    <select>
                        <option value="not-accepted">Year</option>
                        {year.map((y,index)=>(<option key={index} value={y}>{y}</option>))}
                    </select>
                </div>
                <div className = 'height'>
                    <h3>Height: </h3>
                    <select>Ft
                        <option value="not-accepted">Feet</option>
                        {feets.map((f, index) => (<option key = {index} value = {f}>{f} ft</option>))}
                    </select>
                    <select>
                        <option value="not-accepted">Inches</option>
                        {inches.map((inch,index)=>(<option key={index} value={inch}>{inch} in</option>))}
                    </select>
                </div>
                <div className = 'single-line'>
                    <h3>Weight:</h3>
                    <input type = 'text' placeholder = 'weight'/>
                    <h3>Gender: </h3>
                    <select>
                        <option value="not-accepted">Please Choose An Option</option>
                        <option value = 'female'>Female</option>
                        <option value = 'male'>Male</option>
                    </select>
                    
                    <h3>Exercise Amount:</h3>
                    <select>
                        <option value="not-accepted">Please Choose An Option</option>
                        <option value = 'none'>0 days per week</option>
                        <option value = 'light'> 1-2 days per week</option>
                        <option value = 'medium'>3-4 days per week</option>
                        <option value = 'moderate'>5-6 days per week</option>
                        <option value = 'heavy'>7 days per week</option>
                    </select>
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
            </form>
            
            <button className= 'continue' >Continue</button>
        </BioFormContainer>

    )

}

export default BioForm;