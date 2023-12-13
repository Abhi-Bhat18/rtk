import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import React from 'react'
import { fetchPosts, selectAllPosts, selectPostStatus, selectPostsError } from "../asyncPosts/asyncPostSlice";

const Blogs = () => {
    const dispatch = useDispatch();

    const postStatus = useSelector(selectPostStatus);
    const postError = useSelector(selectPostsError);
    const posts = useSelector(selectAllPosts);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])


    if (postStatus == 'loading') {
        return <p> Loading ... </p>
    }

    else if (postError) {
        return <p>{postError}</p>
    }

    console.log(posts);

    return (
        <section className="space-y-5">
            {
                posts.map(post => (
                    <article key={post.id} className="p-5 border-white border-[1px] rounded-md">
                        <h2 className="text-3xl">{post.title}</h2>
                        <p> {post.body} </p>
                    </article>
                ))
            }
        </section>
    )
}

export default Blogs