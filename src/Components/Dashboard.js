import React from 'react'
import { connect } from "react-redux"


function Dashboard(props) {

    return (
        <div className='styled'>
            HELLO WORLD
            <div>
            <h1> Daily Macronutrients</h1>
            <h1> November 18, 2019</h1>
            </div>
            <div>
                <p>Protein: {}</p>
                <p>Fats: {}</p>
                <p>Carbohydrates: {}</p>
            </div>
            <h1>Total Daily Calories</h1>
                <p>{}</p>
                <div>
                    <div className='days'>
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
                            <p>Protein: {}</p>
                            <p>Fats: {}</p>
                            <p>Carbohydrates: {}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {}</p>
                            <p>Fats: {}</p>
                            <p>Carbohydrates: {}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {}</p>
                            <p>Fats: {}</p>
                            <p>Carbohydrates: {}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                        <div>
                            <div>
                            <h3>Meal 1:</h3>
                            <p>Protein: {}</p>
                            <p>Fats: {}</p>
                            <p>Carbohydrates: {}</p>
                            </div>
                            {/* img goes here */}
                        </div>
                    </div>
                </div>
        </div>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser
})
export default connect(mapStateToProps)(Dashboard)
