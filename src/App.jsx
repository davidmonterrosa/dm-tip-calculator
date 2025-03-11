import { useState } from 'react'
import './App.css'
import FormAreaComponent from './components/FormAreaComponent'
import ResultAreaComponent from './components/ResultAreaComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen w-full'>
      <FormAreaComponent/>
      <ResultAreaComponent/>
    </div>
  )
}

export default App
