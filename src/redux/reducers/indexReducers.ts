import { combineReducers } from "redux";
import userReducer from "./register/registerReducers";

const reducers = combineReducers({ userReducer })

export default reducers
export type RootState = ReturnType<typeof reducers>