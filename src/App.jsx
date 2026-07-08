import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import ProductoSingle from './pages/ProductoSingle'
import Productores from './pages/Productores'
import ProductorSingle from './pages/ProductorSingle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/producto/:id" element={<ProductoSingle />} />
        <Route path="/productores" element={<Productores />} />
        <Route path="/productor/:slug" element={<ProductorSingle />} />
      </Routes>
    </BrowserRouter>
  )
}
