import { Link, useParams } from 'react-router-dom'
import { Eyebrow } from '../components/Eyebrow'
import { articulos, getArticulo } from '../data/articulos'

export function Articulo() {
  const { slug } = useParams()
  const articulo = getArticulo(slug)

  if (!articulo) {
    return (
      <section className="px-8 py-[140px] text-center">
        <h1 className="text-[32px]">No encontramos ese artículo</h1>
        <p className="mt-4 text-ink-soft">
          Puede que haya cambiado de sitio. Ajá, vuelve al listado y busca de nuevo.
        </p>
        <Link
          to="/cultura-cervecera"
          className="mt-8 inline-block text-[12.5px] tracking-[0.1em] text-violeta-deep uppercase"
        >
          ← Volver a Cultura Cervecera
        </Link>
      </section>
    )
  }

  const otros = articulos.filter((a) => a.slug !== articulo.slug)

  return (
    <>
      <article>
        <header className="bg-noche px-8 pt-[70px] pb-[76px] text-center text-hueso">
          <div className="mx-auto max-w-[1180px]">
            <Eyebrow onDark className="mb-4 block">
              {articulo.categoria} · {articulo.fecha}
            </Eyebrow>
            <h1 className="mx-auto max-w-[20ch] text-[clamp(30px,4.6vw,50px)] text-white">
              {articulo.titulo}
            </h1>
          </div>
        </header>

        {/* Ancho de lectura cómodo, cerca de 65 caracteres. */}
        <div className="mx-auto max-w-[68ch] px-8 py-[90px]">
          {articulo.parrafos.map((parrafo, i) => (
            <p
              key={parrafo.slice(0, 40)}
              className={`mb-7 text-[17.5px] leading-[1.75] text-ink-soft last:mb-0 ${
                i === 0 ? 'text-[19px] text-ink' : ''
              }`}
            >
              {parrafo}
            </p>
          ))}

          <p className="mt-12 border-t border-rule pt-7 text-[13px] text-ink-soft italic">
            Publicado originalmente en{' '}
            <a
              href={articulo.original}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violeta-deep underline underline-offset-2"
            >
              friales.com
            </a>
            .
          </p>
        </div>
      </article>

      <section className="border-t border-rule bg-paper-dim py-[80px]">
        <div className="mx-auto max-w-[1180px] px-8">
          <Eyebrow className="mb-8 block text-center">Sigue nerdeando</Eyebrow>

          <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
            {otros.map((otro) => (
              <Link
                key={otro.slug}
                to={`/cultura-cervecera/${otro.slug}`}
                className="group flex flex-col gap-3 bg-paper px-9 py-9"
              >
                <span className="text-[12px] tracking-[0.1em] text-violeta-deep uppercase">
                  {otro.categoria} · {otro.fecha}
                </span>
                <h3 className="text-[20px] text-ink transition-colors group-hover:text-violeta-deep">
                  {otro.titulo}
                </h3>
                <p className="text-[15px] text-ink-soft">{otro.extracto}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/cultura-cervecera"
              className="text-[12.5px] tracking-[0.1em] text-violeta-deep uppercase"
            >
              ← Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
