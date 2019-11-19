import { createStore , combineReducers , applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import { userReducer } from "./UserState/userReducer"
import { userStatsReducer } from "./UserStats/userStatsReducer";


let reducer = combineReducers({
    userState : userReducer,
    userStats : userStatsReducer
})

const middleware = [thunk,logger]
export const store = createStore(reducer,applyMiddleware(...middleware))