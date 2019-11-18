import React, { useEffect } from 'react'
import { connect } from "react-redux"

function Dashboard(props) {


    return (
        <div>
            {props.userProfile.stats.age}
        </div>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser
})
export default connect(mapStateToProps)(Dashboard)