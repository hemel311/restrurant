import { useState } from 'react'
import './App.css'
import MainComponent from './component/MainComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <MainComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App
