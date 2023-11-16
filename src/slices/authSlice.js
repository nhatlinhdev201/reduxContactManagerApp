import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAccounts } from "../api/accountApi";

export const fetchAccounts = createAsyncThunk('auth/fetchAccounts', async () => {
    const response = await getAccounts();
    return response.data;
})
const authSlice = createSlice({
    name: "auth",
    initialState: { data: [], accountLogin: null, isLogin: false, status: 'idle', error: null },
    reducers: {
        login: (state, action) => {
            state.accountLogin = action.payload;
            state.isLogin = true;
        },
        logout: (state) => {
            state.accountLogin = null;
            state.isLogin = false;
        }
    },
    extraReducers: builder => builder
        .addCase(fetchAccounts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAccounts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchAccounts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer