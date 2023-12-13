import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import blogReducer from '../features/blog/blogSlice';
import userReducer from '../features/users/userSlice';
import postReducer from '../features/asyncPosts/asyncPostSlice';
export const store = configureStore({
    reducer : {
        counter : counterReducer,
        posts : postReducer,
        users : userReducer,
    }
})

