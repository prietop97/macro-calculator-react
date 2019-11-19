import React from 'react';
import styled from 'styled-components';

const CalculatedPage = () => {

    return (
        <div>
            <h3>Based on the information given, your daily intake of macronutrients has been calculated for you.</h3>
            <div>
                <div>
                    <h3>Daily Macros: </h3>
                    <div>
                        <p>Protien: {}</p>
                        <p>Fat: {}</p>
                        <p>Carbs: {}</p>
                    </div>
                    <h3>Total Daily Calories: </h3>
                        <p>{}</p>
                </div>

            </div>
            <div>
                {/* An image will go here! */}
            </div>

            <h2>We will now curate a weekly meal plan based on your numbers. Your daily macronutrients will be automatically calculated between the meals you choose per day.</h2>
            <button className='continue'>Continue</button>
        </div>
    )
}

export default CalculatedPage;