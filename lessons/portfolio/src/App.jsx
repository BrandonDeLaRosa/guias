import './App.css'
import { useState } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'

import Header from './components/Header'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Home from './pages/Home'
import Info from './pages/Info'
import Projects from './pages/Projects'

import Inicio from './paginas/Inicio'
import SobreMi from './paginas/SobreMi'
import Informacion from './paginas/Informacion'
import Proyectos from './paginas/Proyectos'
import Contactame from './paginas/Contactame'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <HashRouter>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={darkMode? "dark-mode" : "light-mode"}>
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/info' element={<Info />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactMe />} />

          <Route path='/inicio' element={<Inicio />} />
          <Route path='/sobre' element={<SobreMi />} />
          <Route path='/informacion' element={<Informacion />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/contacto' element={<Contactame />} />

        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
