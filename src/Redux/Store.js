import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/CartSlices';
import sumReducer from "./Slices/grandTotalSlice"

const store = configureStore({
    reducer:{
        cart : cartReducer,
        sum: sumReducer,
    },
});

export default store;