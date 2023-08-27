import React from "react"
import { Routes, Route } from "react-router-dom"
import Posts from "./pages/Posts"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  
  return (

    <div>
      
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
      
       
   
    </div>
      
    
  )
}

export default App
