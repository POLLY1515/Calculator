import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calculator from './Components/Calculator/index.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </StrictMode>,
)
