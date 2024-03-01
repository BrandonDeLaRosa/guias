import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Characters from './Components/Characters'
import Header from './Components/Header'
import Home from './Components/Home'
import Locations from './Components/Locations'
import Login from './Components/Login'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <HashRouter>
      <div className={darkMode ? "dark-mode" : "ligh-mode"}>
        <div className='container'>
          <Header darkMode={darkMode}/>
          <div className='toggler'>
            {
              darkMode ?
                (
                  <>
                    <span onClick={() => setDarkMode(false)} style={{ color: "yellow" }}><i class="fa-solid fa-sun"></i></span>
                  </>
                ) :
                (
                  <>
                    <span onClick={() => setDarkMode(true)} style={{ color:  "#c96dfd" }}> <i class="fa-solid fa-moon"></i></span>
                  </>
                )
            }
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/characters' element={<Characters />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

