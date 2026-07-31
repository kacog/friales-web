import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { articulos } from '../data/articulos'

export function CulturaCervecera() {
  return (
    <>
      <PageHeader
        eyebrow="Antes de vender, enseñar"
        titulo="Cultura Cervecera"
        descripcion="Datos curiosos, estilos, rituales y la escena cervecera del Caribe colombiano. Aquí nerdeamos con calma."
      />

      <section className="py-[100px]">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="grid gap-px border border-rule bg-rule md:grid-cols-3">
            {articulos.map((articulo) => (
              <article key={articulo.slug} className="flex flex-col bg-paper">
                <Link
                  to={`/cultura-cervecera/${articulo.slug}`}
                  className="group flex flex-grow flex-col gap-3.5 px-[34px] py-10"
                >
                  <div className="flex items-center gap-3 text-[12px] tracking-[0.1em] uppercase">
                    <span className="text-violeta-deep">{articulo.categoria}</span>
                    <span className="text-rule">·</span>
                    <time dateTime={articulo.fechaISO} className="text-ink-soft">
                      {articulo.fecha}
                    </time>
                  </div>

                  <h2 className="text-[23px] text-ink transition-colors group-hover:text-violeta-deep">
                    {articulo.titulo}
                  </h2>

                  <p className="flex-grow text-[15.5px] text-ink-soft">
                    {articulo.extracto}
                  </p>

                  <span className="mt-2 text-[12.5px] tracking-[0.1em] text-violeta-deep uppercase">
                    Leer el artículo →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
