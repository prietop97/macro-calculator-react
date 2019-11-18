import {
    LOGIN_START,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS
} from "./userActions"

const initialState = {
    error: null,
    isFetching: false,
    currentUser: {
        username: "Whatever",
        password: "whatever",
        stats:{
            age: 22,
            height: {
                feet: 5,
                inches: 9
            },
            activityLevel: "moderate",
            weight: 150,
            gender: "male",
            goal: "maintain"
        },
        numberOfMeals: {
            snacks: 0,
            meals: 0,
        }
    },

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
        case SIGN_UP_START:
            return {
                ...state,
                currentUser: payload
        }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
                isFetching: false
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                error: "Wrong Email Or Password",
                isFetching: false
        }
        default:
            return state
    }
}