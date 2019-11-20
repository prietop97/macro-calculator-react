import {
    FETCH_STATS_FAILED,
    FETCH_STATS_SUCCESS,
    FETCH_STATS_START,
    SEND_STATS_START,
    SEND_STATS_SUCCESS,
    SEND_STATS_FAILED
} from "./userStatsActions"
import { calculateStats } from "./userStatsActions"

const initialState = {
    userStatsObj: {},
    isFetching: false,
    error: null,
    totalCalories: "",
    proteinGrams : "",
    carbsGrams : "",
    fatsGrams : ""
}

export const userStatsReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case FETCH_STATS_START:
            return {
                ...state,
                isFetching: true,
                error: null,
                userStats: {}
            }
        case FETCH_STATS_SUCCESS:
            const cal = calculateStats(payload)
            return {
                ...state,
                isFetching: false,
                userStatsObj: payload,
                totalCalories: cal,
                proteinGrams: cal * 0.075,
                carbsGrams: cal * 0.1,
                fatsGrams: cal * 0.033
            }
        case FETCH_STATS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload,
                userStatsObj: {}
            }
        case SEND_STATS_START:
            return{
                ...state,
                isFetching: true,
                error: null,
                userStatsObj: {}
            }
        case SEND_STATS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: null,
                userStatsObj: payload
            }
        case SEND_STATS_FAILED:
            return{
                ...state,
                isFetching: false,
                error: payload,
                userStatsObj: {}
            }
        default:
            return state
    }
}