import React from 'react';
import {meals} from './data';

const SnacksAndMeals = () => {

    return (
        <div>
            <div className = 'SnacksAndmeals'>
                <h1>Snacks And Meals </h1>
            <div>
                <h3>Monday</h3>
                <select>
                    {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Tuesday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Wednesday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Thursday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Friday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Saturday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            <div>
                <h3>Sunday</h3>
                <select>
                {meals.map((m,index) => (<option key={index} value={m}>{m}</option>))}
                </select>
            </div>
            </div>
            <button className='continue'>Continue</button>
        </div>
    )
}
export default SnacksAndMeals