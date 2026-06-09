import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import ProductoSingle from './pages/ProductoSingle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/producto/:id" element={<ProductoSingle />} />
      </Routes>
    </BrowserRouter>
  )
}
