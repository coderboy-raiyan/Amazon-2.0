import { createSlice } from "@reduxjs/toolkit";

const initialState: { basket: any[] } = {
    basket: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state: any, action: any) {},
        removeFromBasket(state: any, action: any) {},
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
