import {createStore}  from "redux";
import Rootreduce from "../Reducer/RootReducer";

const store = createStore(Rootreduce)
export default store;