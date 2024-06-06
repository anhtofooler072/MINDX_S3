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

export const tokenize = createAsyncThunk("tokenize", async (values) => {
  try {
    const response = await axios.post(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/tokenize",
      values,
    );
    console.log(typeof response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserInfo = createAsyncThunk("getUserInfo", async (values) => {
  try {
    const response = await axios.get(
      "https://ss3-services.onrender.com/mindx_ss3_2/user/getUser",
      {
        headers: {
          Authorization: `Bearer ${values}`,
        },
      },
    );
    console.log(response.data);
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
    accessToken: "",
  },
  reducers: {
    checkLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    
    // this is for register
    builder.addCase(register.fulfilled, (state, action) => {
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.phone_number = action.payload.phone_number;
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

    // this is for tokenizing
    builder.addCase(tokenize.fulfilled, (state, action) => {
      // state.isLoggedIn = true;
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", state.accessToken);
      console.log(state.accessToken);
      console.log("tokenize successfully!");
    });
    builder.addCase(tokenize.pending, () => {
      console.log("tokenize pending!");
    });
    builder.addCase(tokenize.rejected, () => {
      console.log("tokenize failed!");
    });

    // this is for getting user's info
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone_number = action.payload.phone_number;
      console.log("get user's info successfully!");
    });
    builder.addCase(getUserInfo.pending, () => {
      console.log("get user's info pending!");
    });
    builder.addCase(getUserInfo.rejected, () => {
      console.log("get user's info failed!");
    });
  },
});

export const { checkLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
