import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    users: [],
    status: 'idle',
    error: null
}

const USER_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USER_URL);
    return response.data;
})

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'success',
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.error.message
            })
    }
})

export const getAllUsers = state => state.users.users;
export const selectUserStatus = state => state.users.status;
export const selectUsersError = state => state.users.error;

export default userSlice.reducer;