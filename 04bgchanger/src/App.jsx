import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='min-w-full h-full duration-200' style={{backgroundColor: color}}>IT IS WORKING </div>
  )
}

export default App
