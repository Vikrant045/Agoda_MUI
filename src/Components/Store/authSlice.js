import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialState ={
    isLoggedIn:false,
}
export const signUp = createAsyncThunk("signUp", async (userData) => {   //sign up
    try {
        const res = await axios.post('https://fakestoreapi.com/users', userData);
        console.log("res of sign up", res.data);
        return res.data;
    } catch (error) {
        console.error("Error occurred during signUp:", error);
        throw error;
    }
});

export const logIn = createAsyncThunk('logIn', async (loginData) => {                 //login
  
   
        const res = await axios.post('https://fakestoreapi.com/auth/login', loginData);
        console.log("login res TOKEN = ", res.data.token);
        return res; // Return the entire response object
  
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                
                console.log("state of log in before",state.isLoggedIn )
                state.isLoggedIn = true;
                console.log("state of log in after",state.isLoggedIn )
                return action.payload;
            })
            .addCase(logIn.rejected, (state, action) => {
                // Handle rejected promise (e.g., set error state)
                state.isLoggedIn = false;
                console.log("reject ",state.isLoggedIn )
            });
    }
});

export default authSlice.reducer;
