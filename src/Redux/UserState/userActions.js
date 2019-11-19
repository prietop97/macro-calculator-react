import axiosWithAuth from "../../Utils/axiosWithAuth"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILED = "SIGN_UP_FAILED"

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "SIGN_UP_SUCCESS"
export const GET_USER_FAILED = "SIGN_UP_FAILED"


export const login = (userInfo) => dispatch => {
    dispatch({type: LOGIN_START});
    axiosWithAuth()
        .post("WHATEVER URL",userInfo)
        .then(res=>{
            localStorage.setItem(res.data)
            dispatch({type:LOGIN_SUCCESS})
        })
        .catch(()=>dispatch({type:LOGIN_FAILED}))
}

export const signUp = (userInfo) => dispatch => {
    dispatch({type: SIGN_UP_START});
    axiosWithAuth()
        .post("/register", userInfo)
        .then(res=>{
            dispatch({type:SIGN_UP_SUCCESS})
        })
        .catch(()=>dispatch({type:SIGN_UP_FAILED}))
}

export const getUser = () => dispatch => {
    dispatch({type: GET_USER_START});
    axiosWithAuth()
        .get("/")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
