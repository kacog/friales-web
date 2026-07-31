import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AgeGate } from './AgeGate'
import { Footer } from './Footer'
import { Header } from './Header'

/**
 * El router no restaura el scroll al cambiar de ruta: lo devolvemos arriba, o
 * lo llevamos al ancla cuando la URL trae hash (p. ej. volver a /#cervezas).
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // La sección puede montarse en el mismo tick que el cambio de ruta.
    const id = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <>
      <AgeGate />
      <ScrollManager />
      <Header />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
