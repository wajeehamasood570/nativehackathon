import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./reducers/loginslice";

const store = configureStore({
    reducer:{
        login:LoginSlice
    }
})

export default store;