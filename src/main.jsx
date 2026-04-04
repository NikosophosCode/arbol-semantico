import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArbolSemantico from './ArbolSemantico.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArbolSemantico />
  </StrictMode>,
)
