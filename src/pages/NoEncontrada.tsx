import { Link } from 'react-router-dom'

export function NoEncontrada() {
  return (
    <section className="px-8 py-[150px] text-center">
      <p className="font-display text-[60px] leading-none text-violeta-deep">404</p>
      <h1 className="mt-6 text-[32px]">Esta página se nos perdió</h1>
      <p className="mx-auto mt-4 max-w-[46ch] text-ink-soft">
        Ajá, aquí no hay nada servido. Vuelve al inicio y sigue por buen camino.
      </p>
      <Link
        to="/"
        className="mt-9 inline-block rounded-[2px] border border-ink bg-ink px-[30px] py-[15px] text-[13.5px] tracking-[0.09em] text-white uppercase transition-colors hover:border-violeta-deep hover:bg-violeta-deep"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
