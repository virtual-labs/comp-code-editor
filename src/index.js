import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App type='webeditor' language='python' />
  </React.StrictMode>,
  document.getElementById('code-editor')
)
