import { useState } from 'react'
import bookLogo from './assets/books.png'
import LogInForm from './components/Login.jsx'
import {AddAllBooks} from './components/Books.jsx'
import Navbar from './components/Navigations.jsx'
import { Routes, Route } from 'react-router-dom'
import SingleBookDetails from './components/SingleBook.jsx'
import RegisterNewUser from './components/Register.jsx'
import AccountDetails from './components/Account.jsx'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<AddAllBooks token={token} setToken={setToken}/>}/>
        <Route path='/books/:bookId' element={<SingleBookDetails token={token}/>}/>
        <Route path='/register' element={<RegisterNewUser setToken={setToken}/>}/>
        <Route path='/account' element={<AccountDetails token={token}/>}/>
      </Routes>
    </>
  )
}

export default App
