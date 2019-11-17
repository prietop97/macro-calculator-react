import {
    LOGIN_START,
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from "./userActions"

const initialState = {
    error: null,
    isFetching: false
}

export const userReducer = (state = initialState , {type , payload}) => {
    switch(type){
        case LOGIN_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                isFetching: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: "Wrong Email Or Password",
                isFetching: false
            }
        default:
            return state
    }
}