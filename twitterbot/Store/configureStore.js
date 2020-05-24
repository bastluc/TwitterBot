import {createStore} from "redux";
import usersReducer from "./Reducers/usersReducer";

export default createStore(usersReducer);