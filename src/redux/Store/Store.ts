import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../Reducers/basketSlice";

const store = configureStore({
    reducer: {
        basket: basketSlice,
    },
});

export default store;
