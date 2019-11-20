import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'


const CalculatedPage = ({userInfo}) => {
    console.log(userInfo);
    return (
        <CalculatedContainer>
            <h3>Based on the information given, your daily intake of macronutrients has been calculated for you.</h3>
            <div>
                <div>
                    <h3>Daily Macros: </h3>
                    <div>
                        <p>Protien: {userInfo.proteinGrams}g</p>
                        <p>Fat: {userInfo.fatsGrams}g</p>
                        <p>Carbs: {userInfo.carbsGrams}g</p>
                    </div>
                    <h3>Total Daily Calories: </h3>
                        <p>{userInfo.totalCalories}cal</p>
                </div>

            </div>
            <div>
                {/* An image will go here! */}
            </div>

            {/* <h2>We will now curate a weekly meal plan based on your numbers. Your daily macronutrients will be automatically calculated between the meals you choose per day.</h2> */}
            <button className='continue'>Continue</button>
        </CalculatedContainer>
    )
}

const mapStateToProps = state => ({
    userInfo: state.userStats
})
export default connect(mapStateToProps,{})(CalculatedPage);

const CalculatedContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-left: 30%;
    font-size: 2rem;
`