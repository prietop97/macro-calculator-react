import React,{ useEffect } from 'react'
import { connect } from "react-redux"
import { fetchStats } from "../Redux/UserStats/userStatsActions"


function Dashboard(props) {
    console.log(props.userProfile)


    useEffect(()=>{
        props.fetchStats(props.userProfile.user_id)
    },[])

    return (
        <div className='styled'>
            HELLO WORLD
            <div>
            <h1> Daily Macronutrients</h1>
            <h1> November 18, 2019</h1>
            </div>
            <div>
                <p>Protein: {"250g"}</p>
                <p>Fats: {"30g"}</p>
                <p>Carbohydrates: {"20g"}</p>
            </div>
            <h1>Total Daily Calories</h1>
                <p>{}</p>
                <div>
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
        </div>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser
})
export default connect(mapStateToProps,{fetchStats})(Dashboard)
