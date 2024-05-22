import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get("https://api-project-testing-mndx3.onrender.com/products");
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productsSlice.reducer;