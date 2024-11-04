import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import Herosection from './componentes/Herosection'
import Aboutme from './componentes/Aboutme'
import Projetos from './componentes/Projetos'
import ContactSection from './componentes/ContactSection'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Herosection />
    <Aboutme />
    <Projetos/>
    <ContactSection/>
  </StrictMode>,
)
