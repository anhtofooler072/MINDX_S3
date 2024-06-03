import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initalState = {
//     loginState: false,
// }

const isLoggedInSlice = createSlice({
    name: "isLoggedIn",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        checkLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
})

export const { checkLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;