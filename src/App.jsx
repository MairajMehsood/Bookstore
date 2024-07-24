import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Sinup from './components/Sinup'
import Contacts from './contacts/Contacts'


const App = () => {
  return (
   <>
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Sinup/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
   </Routes>
   </BrowserRouter>
   </>

  )
}

export default App