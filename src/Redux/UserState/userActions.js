import axiosWithAuth from "../../Utils/axiosWithAuth"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILED = "SIGN_UP_FAILED"

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

export const signup = (userInfo) => dispatch => {
    dispatch({SIGN_UP_START})
    axiosWithAuth()
        .post("Whatever URL",userInfo)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err.message))
}
