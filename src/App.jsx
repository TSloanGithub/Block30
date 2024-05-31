import { useState } from 'react'
import bookLogo from './assets/books.png'
import LogInForm from './components/Login'
import {AddAllBooks} from './components/Books.jsx'
import Navbar from './components/Navigations.jsx'
import { Routes, Route } from 'react-router-dom'
import SingleBookDetails from './components/SingleBook.jsx'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Routes>
        <Route path='/' element={<AddAllBooks/>}/>
        <Route path='/login' element={<LogInForm/>}/>
        <Route path='/books/:bookId' element={<SingleBookDetails/>}/>
      </Routes>
    </>
  )
}

export default App
