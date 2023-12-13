import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
import axios from "axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POST_URL);
    return response.data;
})

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const asyncPostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success',
                state.posts = action.payload
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const selectAllPosts = state => state.posts.posts;
export const selectPostStatus = state => state.posts.status;
export const selectPostsError = state => state.posts.error;

export default asyncPostSlice.reducer;