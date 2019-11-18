import React, { useEffect , useState } from 'react'
import { connect } from "react-redux"
import { getMacros } from "../Utils/Macros"

function Dashboard(props) {
    const [userCalories,setUserCalories] = useState()
    useEffect(()=>{
        const calories = getMacros(props.userProfile.stats)
        setUserCalories(calories.totalCalories)
    },[])

    return (
        <div>
            {userCalories}
        </div>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser
})
export default connect(mapStateToProps)(Dashboard)