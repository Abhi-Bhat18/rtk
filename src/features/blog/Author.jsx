import React from 'react'
import { getAllUsers } from '../users/userSlice'
import { useSelector } from 'react-redux'

const Author = ({ id }) => {
    const users = useSelector(getAllUsers);

    const author = users.find(user => user.id === id);

    return (
        <div className='text-sm'>
            <p>
                Authored By {author ? author.name : 'Unknown'}
            </p>
        </div>
    )
}

export default Author