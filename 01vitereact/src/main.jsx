/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  ) 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>
    MyApp()
)
