import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Articulo } from './pages/Articulo'
import { Contacto } from './pages/Contacto'
import { CulturaCervecera } from './pages/CulturaCervecera'
import { Home } from './pages/Home'
import { NoEncontrada } from './pages/NoEncontrada'
import { Nosotros } from './pages/Nosotros'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cultura-cervecera" element={<CulturaCervecera />} />
        <Route path="/cultura-cervecera/:slug" element={<Articulo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
