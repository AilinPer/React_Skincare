import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";
import { ecommerceApi } from "../services/ecommerceApi"
import authSlice from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        homeSlice,
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecommerceApi.middleware)
        
});