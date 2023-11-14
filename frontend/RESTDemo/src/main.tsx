import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div data-bs-theme="dark">
    <App />
    </div>
  </React.StrictMode>,
)
