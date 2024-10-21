import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs'
import Bookmarks from './Component/Bookmarks'
import Header from './Component/Header'



function App() {

  const [bookmarks, setBookmarks] =useState([]);

const handleBookmarks = (blog) => {
  // console.log(blog , "paice tore");
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}


  return (
    <>
     <Header></Header>

     <main className='md:flex justify-between max-w-7xl mx-auto w-11/12 mt-8 gap-6'>
     <Blogs handleBookmarks={handleBookmarks}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
    </>
  )
}

export default App
