// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "../../States/Reducer/Bus-Reducer/terminal.js";
//import UsersReducer from "../States/Reducers/Users-Reducer/UsersReducer";

const store = configureStore({
  reducer: {
    //user: UsersReducer,
  },
});

export default store;
