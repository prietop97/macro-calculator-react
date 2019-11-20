import axiosWithAuth from "../../Utils/axiosWithAuth"

export const FETCH_STATS_START = "FETCH_STATS_START"
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS"
export const FETCH_STATS_FAILED = "FETCH_STATS_FAILED"

export const SEND_STATS_START = "SEND_STATS_START"
export const SEND_STATS_SUCCESS = "SEND_STATS_SUCCESS"
export const SEND_STATS_FAILED = "SEND_STATS_FAILED"

export const sendStats = (info,history) => dispatch => {
    dispatch({type:SEND_STATS_START})
    axiosWithAuth()
        .post("/info",info)
        .then(res=>{
            dispatch({type: SEND_STATS_SUCCESS , payload: res.data})
            history.push("/Calculatedpage")
            })
        .catch(err=>console.log(err))
        
}

export const fetchStats = (id) => dispatch => {
    dispatch({type:FETCH_STATS_START})
    axiosWithAuth()
        .get(`/info/${id}`)
        .then(res=>dispatch({type: FETCH_STATS_SUCCESS , payload: res.data}))
        .catch(err=>console.log(err))
}

export const calculateStats = (user) => {
    let numberBMR = 0
    if(user.gender === "male"){
        numberBMR = 66
    }else{
        numberBMR = 655
    }
    const BMR = numberBMR + (6.23 * user.height) + (12.7 * user.height) - (6.8 * 21)
    return Math.floor(BMR * user.activity_factor * user.goal_multiplier)
}


