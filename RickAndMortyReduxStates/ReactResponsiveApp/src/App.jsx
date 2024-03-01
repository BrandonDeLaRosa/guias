import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Personajes from './pages/Personajes'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <Container className='my-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/characters" element={<Personajes />} />
          </Routes>
        </Container>
      </HashRouter>
    </>
  )
}

export default App
