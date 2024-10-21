import './App.css'
import Blogs from './Component/Blogs'
import Bookmarks from './Component/Bookmarks'
import Header from './Component/Header'



function App() {


  return (
    <>
     <Header></Header>

     <main className='md:flex justify-between max-w-7xl mx-auto w-11/12 mt-8'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </main>
    </>
  )
}

export default App
