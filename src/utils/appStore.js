import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";
import cityReducer from "./citySlice";
const appStore=configureStore({
    reducer: {
       cart: cartReducer,
       address: addressReducer,
       city:cityReducer,
    }
});

export default appStore;