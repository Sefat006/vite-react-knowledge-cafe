import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blogs/Blog';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  } 

  const handleMarkAsRead = time =>{
    setReadingTime(readingTime+time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl gap-14 mx-auto'>
        <Blog handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
