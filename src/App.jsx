import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs'
import Bookmarks from './Component/Bookmarks'
import Header from './Component/Header'

function App() {

  const [bookmarks, setBookmarks] =useState([]);
  const [readTime, setReadTime] = useState(0);

const handleBookmarks = (blog) => {
  // console.log(blog , "paice tore");
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
  
}



const handleMarkAsRead = (id, time) => {
  const num = parseFloat(time)
  const newTime = readTime + num;
  setReadTime(newTime);

  const remainingBookmarks = bookmarks.filter(Bookmark => Bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}


  return (
    <>
     <Header></Header>
     <main className='md:flex justify-between max-w-7xl mx-auto w-11/12 mt-8 gap-6 mb-14'>
     <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
     </main>
    </>
  )
}

export default App
