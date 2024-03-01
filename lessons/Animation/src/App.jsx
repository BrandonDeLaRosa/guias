import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button className='btn'>Learn More</button> 
      <h1 className='animate bouncing'>Bouncing</h1>
      {/* Duration is an extra utility class, slideInleft only has name and ease */}
      <h1 className='animate slideInLeft animate--fast'>Hello World </h1>  
      <h2 className='animate slideInRight animate--slow'>Hello World </h2>
      <h3 className='animate slideInLeft animate--slow animate--infinite'>Hello World </h3>
      <h3 className='animate rotate animate--slow animate--infinite'>Rotating </h3>
    </div>
  )
}

export default App
