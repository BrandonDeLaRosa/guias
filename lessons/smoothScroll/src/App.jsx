import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Pages from './components/Pages'

function App() {

  return (
    <HashRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>
        <Route path="/pages" element={<Pages/>}/>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
{/* <button>page1</button>
<button>page2</button>
<button>page3</button> */}


