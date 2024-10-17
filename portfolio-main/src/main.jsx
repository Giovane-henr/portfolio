import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import Herosection from './componentes/Herosection'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Herosection />
  </StrictMode>,
)
