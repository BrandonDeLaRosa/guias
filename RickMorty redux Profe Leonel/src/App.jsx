import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Characters from './pages/Characters'
import CharactersInfo from './pages/CharactersInfo'
import Home from './pages/Home'
import LocationInfo from './pages/LocationInfo'
import Locations from './pages/Locations'

function App() {

  return (
    <HashRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/locationInfo/:id" element={<LocationInfo/>}/>
        <Route path="/characterInfo/:id" element={<CharactersInfo/>}/>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
