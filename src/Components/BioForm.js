import React from 'react';
// import useForm from '../Utils/useForm';
import {month, days, year, feets, inches}from './data.js';

const BioForm = () => {


    return (
        <div className= 'login'>
            <form>
                <h3>Birthdate:</h3>
                <select className = 'month'>
                    <option>Month</option>
                    {month.map((mon,index)=>(<option key={index} value={mon}>{mon}</option>))}
                </select>
                <select>
                    <option>Day</option>
                    {days.map((d, index )=> (<option key = {index} value = {d}>{d}</option>))}
                </select>
                <select>
                    <option>Year</option>
                    {year.map((y,index)=>(<option key={index} value={y}>{y}</option>))}
                </select>
                <div>
                    <h3>Height: </h3>
                    <select>Ft
                        <option>Please Choose An Option</option>
                        {feets.map((f, index) => (<option key = {index} value = {f}>{f}</option>))}
                    </select>
                    <select>
                        <option>Please Choose An Option</option>
                        {inches.map((inch,index)=>(<option key={index} value={inch}>{inch}</option>))}
                    </select>
                </div>
                <h3>Weight:</h3>
                <input type = 'text' placeholder = 'weight'/>
                <h3>Gender: </h3>
                <select>
                    <option>Please Choose An Option</option>
                    <option value = 'female'>Female</option>
                    <option value = 'male'>Male</option>
                </select>
                
                <h3>Exercise Amount:</h3>
                <select>
                    <option>Please Choose An Option</option>
                    <option value = 'none'>0 days per week</option>
                    <option value = 'light'> 1-2 days per week</option>
                    <option value = 'medium'>3-4 days per week</option>
                    <option value = 'moderate'>5-6 days per week</option>
                    <option value = 'heavy'>7 days per week</option>
                </select>
                <h3>Goals</h3>
                <select>
                    <option>Please Choose An Option</option>
                    <option value = 'aggressive'>Aggressive Weight Loss (20% deficit)</option>
                    <option value = 'moderate'>Moderate Weight Loss (15% deficit)</option>
                    <option value = 'light'>Light Weight Loss (10% deficit)</option>
                    <option value = 'maintain'>Maintain Current Weight</option>
                    <option value = 'moderate-gain'>Moderate Weight Gain (10% surplus)</option>
                    <option value = 'aggressive-gain'>Aggressive Weight Gain (15% surplus)</option>
                </select>
        
            </form>
            <button className= 'continue' >Continue</button>
        </div>

    )

}

export default BioForm;