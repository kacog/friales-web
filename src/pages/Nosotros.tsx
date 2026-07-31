import { Button } from '../components/Button'
import { Eyebrow } from '../components/Eyebrow'
import { PageHeader } from '../components/PageHeader'
import { beers, contacto, lore, nosotros } from '../data/content'

export function Nosotros() {
  return (
    <>
      <PageHeader
        eyebrow={nosotros.eyebrow}
        titulo={nosotros.titulo}
        descripcion={nosotros.intro}
      />

      <section className="py-[100px]">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mx-auto max-w-[62ch]">
            {nosotros.parrafos.map((parrafo) => (
              <p key={parrafo} className="mb-6 text-[17px] text-ink-soft last:mb-0">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-16 grid gap-px border border-rule bg-rule md:grid-cols-2">
            {nosotros.pilares.map((pilar) => (
              <div key={pilar.titulo} className="bg-paper px-11 py-12">
                <Eyebrow className="mb-4 block">{pilar.titulo}</Eyebrow>
                <p className="font-display text-[21px] leading-[1.35] text-ink italic">
                  {pilar.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Las tres esencias, en versión resumida: el detalle vive en el home. */}
      <section className="bg-noche py-[100px] text-hueso">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <Eyebrow onDark className="mb-3.5 block">
              {lore.eyebrow}
            </Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,40px)] text-white">
              Tres esencias, un mismo ritual
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {beers.map((beer) => (
              <div key={beer.id} className="text-center">
                <img
                  src={beer.imagen}
                  alt={`Botella de cerveza ${beer.nombre}`}
                  width={440}
                  height={1010}
                  loading="lazy"
                  className="mx-auto h-[220px] w-auto object-contain"
                />
                <h3 className="mt-6 text-[22px] text-white">{beer.nombre}</h3>
                <p className="mt-1.5 text-[12.5px] tracking-[0.1em] text-violeta-pale uppercase">
                  {beer.estilo}
                </p>
                <p className="mt-3 text-[15px] text-hueso-dim italic">{beer.esencia}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href={contacto.tienda} external>
              Ir a la tienda
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
