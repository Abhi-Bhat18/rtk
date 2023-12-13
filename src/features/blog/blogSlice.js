import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1', title: 'Learning Redux Toolkit',
        content: "I've heard good things",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        authorId : '1',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2', title: "Slices in Redux Toolkit",
        content: "The more I say slice, the more I want pizza",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        authorId : '3',
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(title, content, authorId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        authorId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        addReaction(state, action) {
            const { postId, reaction } = action.payload;

            const post = state.find(post => post.id === postId);
            if (post) {
                post.reactions[reaction] +=  1;
            }
        }
    }
})



export const { addBlog , addReaction} = blogSlice.actions;


export const selectAllBlogs = (state) => state.blogs;

export default blogSlice.reducer;