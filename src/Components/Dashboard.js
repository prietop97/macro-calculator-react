import React from 'react'
import { connect } from "react-redux"


function Dashboard(props) {

    return (
        <div>
            HELLO WORLD
        </div>
    )
}


const mapStateToProps = state => ({
    userProfile: state.userState.currentUser
})
export default connect(mapStateToProps)(Dashboard)