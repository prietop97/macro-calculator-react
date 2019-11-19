import axiosWithAuth from "../../Utils/axiosWithAuth"

export const FETCH_STATS_START = "FETCH_STATS_START"
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS"
export const FETCH_STATS_FAILED = "FETCH_STATS_FAILED"

export const fetchStats = (id) => dispatch => {
    dispatch({type:FETCH_STATS_START})
    axiosWithAuth()
        .get(`/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
