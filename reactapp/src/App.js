import { useState } from 'react'

import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './login/login';
import Register from './Registration/Register';
import Home from './Home/Home';


function App() {
 
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App