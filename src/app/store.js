import { configureStore } from "@reduxjs/toolkit";
import  productReducer from '../features/product/productSlice';
// import product from '../features/product/productApi';


export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});