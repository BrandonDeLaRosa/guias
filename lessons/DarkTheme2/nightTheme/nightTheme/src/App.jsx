import './App.css'
import FormC from './Components/FormC'
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

function App() {
 
  const [theme,setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light") ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme }}>

      <div className="App" id={theme}>
      {/* <div className="App" id={theme}> */}
        <FormC />
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        {/* <button onClick={toggleTheme}>NightMode</button> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App

// npm i react-switch
