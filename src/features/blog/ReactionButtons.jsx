import { useDispatch } from "react-redux";
import { addReaction } from "./blogSlice";

import React from 'react'

const ReactionButtons = ({ blog }) => {
    const dispatch = useDispatch();

    const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😮',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕'
    }

    const reactionButtons = Object.entries(reactionEmoji).map( ([name,emoji]) => {
        return (
            <button
            key={name}
            className="mx-2"
            type = 'button'
            onClick={() => dispatch(addReaction({postId : blog.id, reaction : name}))}
            >

                {emoji} {blog.reactions[name]}
            </button>
        )
    })
  return (
    <div>
        {reactionButtons}
    </div>
  )
}

export default ReactionButtons