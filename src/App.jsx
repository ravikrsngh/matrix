import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/home'
import Header from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomePage />
    </>
  )
}

export default App
