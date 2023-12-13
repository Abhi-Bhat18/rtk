import React from 'react'
import Blogs from './features/blog/Blogs'


const App = () => {
  return (
    <main className='bg-gray-800 min-h-screen py-10 text-white'>
     <div className='max-w-4xl mx-auto flex flex-col justify-center items-center space-y-10'>
      <h1 className='text-3xl'>Posts</h1>
      <Blogs/>
     </div>
    </main>

  )
}

export default App