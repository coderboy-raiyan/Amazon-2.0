/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";

interface IBasketSlice {
    // eslint-disable-next-line no-undef
    basket: IProduct[];
}

const initialState: IBasketSlice = {
    basket: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // eslint-disable-next-line no-undef
        addToBasket(state: IBasketSlice, action: IAddToBasket) {
            const isAlreadyInBasket = state.basket.find(
                (product) => product.id === action.payload.id
            );

            if (isAlreadyInBasket) {
                state.basket = state.basket.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity! + 1 };
                    }
                    return item;
                });
            } else {
                action.payload.quantity = 1;
                state.basket = [...state.basket, action.payload];
            }
        },
        // eslint-disable-next-line no-undef
        removeFromBasket(state: IBasketSlice, action: IRemoveFromBasket) {
            const isAlreadyInBasket = state.basket.find((product) => product.id === action.payload);

            if (isAlreadyInBasket?.quantity === 0 || isAlreadyInBasket?.quantity === 1) {
                state.basket = state.basket.filter((item) => item.id !== action.payload);
            } else {
                state.basket = state.basket.map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity! - 1 };
                    }
                    return item;
                });
            }
        },

        // eslint-disable-next-line no-undef
        changeQty(state: IBasketSlice, action: { payload: IProduct }) {
            state.basket = state.basket.map((product) => {
                if (product.id === action.payload.id) {
                    return { ...product, quantity: action.payload.quantity };
                }
                return product;
            });
        },
    },
});

export const { addToBasket, removeFromBasket, changeQty } = basketSlice.actions;
export default basketSlice.reducer;
