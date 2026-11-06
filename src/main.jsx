import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// El CMS cachea las respuestas por URL con el Access-Control-Allow-Origin del primer
// dominio que las pidió; un parámetro por dominio evita servir esa copia a otro origen.
axios.interceptors.request.use((config) => {
  config.params = { ...config.params, _o: window.location.host }
  return config
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
