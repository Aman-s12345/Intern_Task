import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Taskslice from "./Slice/Taskslice";

const rootReducer = combineReducers({
    task: Taskslice,  
  });

const store = configureStore({
    reducer: rootReducer,
});


export default store;