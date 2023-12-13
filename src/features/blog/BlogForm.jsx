import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from './blogSlice';
import { getAllUsers } from '../users/userSlice';

const BlogForm = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user, setUser] = useState("");

    const users = useSelector(getAllUsers);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        dispatch(addBlog(title, content, user))
        setContent("")
        setTitle("")
        setUser("")
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const canSave = Boolean(title) && Boolean(content);

    return (
        <form className='space-y-5' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label htmlFor="title" className='space-y-2'>
                    <p className='text-2xl'> Title</p>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name='title' className='border-blue-900 w-[500px] text-gray-900  rounded-md border-[2px] px-2 py-1' />
                </label>

                <label htmlFor="content" className='space-y-2'>
                    <p className='text-2xl'> Content</p>
                    <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} name='content' className='border-blue-900 w-[500px] h-[200px] text-gray-900 rounded-md border-[2px] px-2 py-1' />
                </label>
                <label htmlFor="author" className=' flex items-center space-x-2'>
                    <p>Author</p>
                    <select onChange={(e) => setUser(e.target.value)} name="author" className='text-gray-900 rounded-md px-2 py-1' id="">
                       <option></option>
                        {userOptions}
                    </select>
                </label>
            </div>
            <button disabled={!canSave} className={`${canSave ? 'bg-white' : 'bg-gray-400'} text-gray-900 px-2 py-1 rounded-md`} type='submit'>Submit</button>

        </form>
    )
}

export default BlogForm