import { useState } from 'react'
import Home from './components/Home'
import './App.css'

function App(props) {

  return (
    <div style={{
      height: '100%'
    }}>
      <Home type={props.type} language={props.language} />
    </div>
  )
}

export default App
