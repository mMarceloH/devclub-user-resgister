import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './global/globaStyles.js'
import Home from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>,
)
