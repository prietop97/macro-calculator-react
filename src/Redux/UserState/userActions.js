import axiosWithAuth from "../../Utils/axiosWithAuth"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILED = "SIGN_UP_FAILED"

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"


export const login = (userInfo) => dispatch => {
    dispatch({type: LOGIN_START});
    axiosWithAuth()
        .post("/login",userInfo)
        .then(res=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
}

export const signUp = (userInfo) => dispatch => {
    dispatch({type: SIGN_UP_START});
    axiosWithAuth()
        .post("/register", userInfo)
        .then(res=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
}

export const getUser = () => dispatch => {
    dispatch({type: GET_USER_START});
    axiosWithAuth()
        .get("/")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
