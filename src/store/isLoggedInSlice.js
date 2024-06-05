import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("register", async (values) => {
  // Add an async arrow function here
  try {
    const response = await axios.post(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/register",
      values,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    isLoggedIn: false,
    signUpState: "",
    username: "",
    email: "",
    phone_number: "",
  },
  reducers: {
    checkLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      state.signUpState = "success";
      state.isLoggedIn = true;
      console.log("Register successfully!");
    });
    builder.addCase(register.pending, (state) => {
      state.signUpState = "pending";
      console.log("Register pending!");
    });
    builder.addCase(register.rejected, (state) => {
      state.signUpState = "failed";
      console.log(state.signUpState);
    });
  },
});

export const { checkLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
