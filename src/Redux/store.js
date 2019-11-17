import { createStore , combineReducers , applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"

import { userReducer } from "./UserState/userReducer"


let reducer = combineReducers({
    userState : userReducer
})

const middleware = [thunk,logger]
export const store = createStore(reducer,applyMiddleware(...middleware))