import axiosWithAuth from "../../Utils/axiosWithAuth"
import { matcherErrorMessage } from "jest-matcher-utils"

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
    let currentDate = new Date()
    let birthDate = new Date(`${user.birthdate_month}/${user.birthdate_day}/${user.birthdate_year}`)
    let oneYear = 1000 * 60 * 60 * 24 * 365
    let difference = Math.floor((currentDate - birthDate) / oneYear)
    let numberBMR = 0
    if(user.gender === "male"){
        numberBMR = 66
    }else{
        numberBMR = 655
    }
    const BMR = numberBMR + (6.23 * user.height) + (12.7 * user.height) - (6.8 * 21)
    return Math.floor(BMR * user.activity_factor * user.goal_multiplier)
}

export const mealPlan = (proteinGrams,carbsGrams,fatsGrams,userInfo) => {
    console.log("user Info", userInfo.carbsGrams);
    let mealProtein = proteinGrams
    let mealCarbs = carbsGrams
    let mealFats = fatsGrams
    let snackProtein = proteinGrams
    let snackCarbs = carbsGrams
    let snackFats = fatsGrams

    if(userInfo.snacks_per_day === 0) {
        mealProtein = Math.floor(mealProtein / userInfo.meals_per_day)
        mealCarbs = Math.floor(mealCarbs / userInfo.meals_per_day)
        mealFats = Math.floor(mealFats / userInfo.meals_per_day)
    }else{
        snackProtein = Math.floor(mealProtein / 8)
        mealProtein = Math.floor(snackProtein * 2) 
        snackCarbs = Math.floor(mealCarbs / 8)
        mealCarbs = Math.floor(snackCarbs * 2)
        snackFats = Math.floor(mealFats / 8)
        mealFats = Math.floor(snackFats * 2)

    }   
    return {
        meals:{
            mealProtein,
            mealCarbs,
            mealFats
        },
        snacks:{
          snackProtein,
          snackFats,
          snackCarbs,
          mealProtein,
          mealCarbs,
          mealFats
        }
    }

}


