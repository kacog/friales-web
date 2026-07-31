import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navegacion } from '../data/content'

export function Header() {
  const { pathname } = useLocation()
  // Solo el home abre con hero claro; el resto de páginas necesitan la nav
  // sólida desde el inicio para que se lea sobre el fondo.
  const esHome = pathname === '/'
  const [bajado, setBajado] = useState(false)

  useEffect(() => {
    const onScroll = () => setBajado(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solida = !esHome || bajado

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        solida ? 'border-rule-dark bg-noche/95 backdrop-blur' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">
        <Link
          to="/"
          className={`font-display text-[21px] font-bold transition-colors ${
            solida ? 'text-white' : 'text-ink'
          }`}
        >
          Fri<span className="text-violeta">Ales</span>
        </Link>

        <ul className="hidden gap-[34px] md:flex">
          {navegacion.map((item) => {
            const activo = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={activo ? 'page' : undefined}
                  className={`border-b pb-[3px] text-[13.5px] tracking-[0.08em] uppercase transition-colors hover:border-violeta ${
                    activo ? 'border-violeta' : 'border-transparent'
                  } ${
                    solida
                      ? 'text-hueso-dim hover:text-white'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
