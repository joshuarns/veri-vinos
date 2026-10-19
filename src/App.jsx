import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import ProductoSingle from './pages/ProductoSingle'
import Productores from './pages/Productores'
import ProductorSingle from './pages/ProductorSingle'
import Nosotros from './pages/Nosotros'
import NuestraHistoria from './pages/NuestraHistoria'
import LegalPage from './pages/LegalPage'
import { privacidad, terminos, cookies } from './data/legal'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/producto/:id" element={<ProductoSingle />} />
        <Route path="/productores" element={<Productores />} />
        <Route path="/productor/:slug" element={<ProductorSingle />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route path={`/${privacidad.slug}`} element={<LegalPage doc={privacidad} />} />
        <Route path={`/${terminos.slug}`} element={<LegalPage doc={terminos} />} />
        <Route path={`/${cookies.slug}`} element={<LegalPage doc={cookies} />} />
      </Routes>
    </BrowserRouter>
  )
}
