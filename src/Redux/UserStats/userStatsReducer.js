import {
    FETCH_STATS_FAILED,
    FETCH_STATS_SUCCESS,
    FETCH_STATS_START
} from "./userStatsActions"

const initialState = {
    userStats: {},
    isFetching: false,
    error: null,
    totalCalories = 0,
    proteinGrams = 0,
    carbsGrams = 0,
    fatsGrams = 0
}

const userStatsReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case FETCH_STATS_START:
            return {
                ...state,
                isFetching: true,
                error: null,
                userStats: {}
            }
        case FETCH_STATS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                userStats: payload,
                totalCalories: 0,
                proteinGrams: 0,
                carbsGrams: 0,
                fatsGrams: 0
            }
        case FETCH_STATS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: payload,
                userStats: {}
            }
        default:
            return state
    }
}