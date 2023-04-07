import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice"

const store = configureStore({
    // Note that this reducer is without s
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
});

export default store;