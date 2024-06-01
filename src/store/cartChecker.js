import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    };

const cartChecker = createSlice({
    name: "cartChecker",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
                state.cart = state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + action.payload.quantity };
                    }
                    return item;
                });
            } else {
                state.cart = [...state.cart, action.payload];
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        updateCart: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: action.payload.quantity };
                }
                return item;
            });
        },
    },
});

export const { addToCart, removeFromCart, updateCart } = cartChecker.actions;

export default cartChecker.reducer;