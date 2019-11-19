import axiosWithAuth from "../../Utils/axiosWithAuth"

export const FETCH_STATS_START = "FETCH_STATS_START"
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS"
export const FETCH_STATS_FAILED = "FETCH_STATS_FAILED"

export const SEND_STATS_START = "SEND_STATS_START"
export const SEND_STATS_SUCCESS = "SEND_STATS_SUCCESS"
export const SEND_STATS_FAILED = "SEND_STATS_FAILED"

export const sendStats = (info) => dispatch => {
    dispatch({type:SEND_STATS_START})
    axiosWithAuth()
        .post("/info",info)
        .catch(err=>console.log(err))
    dispatch({type: SEND_STATS_SUCCESS , payload: info})
}

// export const fetchStats = (info) => dispatch => {
//     dispatch
// }


