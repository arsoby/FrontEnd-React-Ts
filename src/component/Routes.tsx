import React from 'react'
import { Routes as Routess, Route, useParams } from 'react-router-dom'
import Calculator from './Calculator'
import Chatbot from './Chatbot'
import Companies from './Companies'
import Company from './Company'
import Favourites from './Favourites'
import Footer from './Footer'
import Home from './Home'
import LogIn from './LogIn'
import Nav from './Nav'


function Routes() {

  

  return (
  <>
  <Nav/>

<Routess>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/companies' element={<Companies/>}></Route>
        <Route  path='/company/:id' element={<Company/>}></Route>
        <Route  path='/calculator' element={<Calculator/>}></Route>
        <Route  path='/login' element={<LogIn/>}></Route>
        <Route  path='/favourites' element={<Favourites/>}></Route>
    </Routess>
    <footer>
    <Footer/>
    </footer>
   
  </>
  )
}

export default Routes