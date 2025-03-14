import { useState } from 'react'
import './App.css'
import FormAreaComponent from './components/FormAreaComponent'


function App() {

  return (
    <div className='grid auto-rows-3 place-content-center min-w-screen w-full bg-lightGrayishCyan'>
      <h1 className='text-2xl font-["SpaceMono"] uppercase text-darkGrayishCyan tracking-[.5em] my-20'>spli <br /> tter</h1>
        <FormAreaComponent/>
    </div>
  )
}

export default App
