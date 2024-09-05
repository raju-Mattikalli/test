import { useState } from 'react'

import './App.css'
import Home from './Home'
import Create from './Create'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Update from './Update'


function App() {
  const [count, setCount] = useState(0)

  return (
  // <>
  //   {/* <Home/> */}
    
  // </>
  <BrowserRouter>
  <Routes>

    <Route path="/" element ={<Home/>}> </Route>
    <Route path="/create" element ={<Create/>}> </Route>
    <Route path="/edit/:id" element ={<Update/>}> </Route>

  </Routes>
  </BrowserRouter>

  )
}

export default App
