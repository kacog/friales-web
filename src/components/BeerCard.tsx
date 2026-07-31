import type { Beer } from '../data/content'

// El nombre toma el color de apoyo de su cerveza.
const nombreColor: Record<Beer['id'], string> = {
  mancai: 'text-mancai',
  jaguaryu: 'text-jaguaryu',
  mayaguaca: 'text-mayaguaca',
}

export function BeerCard({ beer }: { beer: Beer }) {
  return (
    <article className="flex flex-col bg-paper">
      <div
        className="relative flex h-[300px] items-end justify-center overflow-hidden px-5 pt-[34px]"
        style={{
          background: `linear-gradient(180deg, color-mix(in srgb, ${beer.tinte} 18%, var(--color-paper)) 0%, var(--color-paper) 80%)`,
        }}
      >
        <img
          src={beer.imagen}
          alt={`Botella de cerveza ${beer.nombre}`}
          width={440}
          height={1010}
          loading="lazy"
          className="relative h-full w-auto object-contain drop-shadow-[0_14px_18px_rgba(20,19,23,0.22)]"
        />
      </div>

      <div className="flex flex-grow flex-col gap-[14px] px-[34px] pt-[30px] pb-10">
        <span className="text-[12.5px] tracking-[0.1em] uppercase text-ink-soft">
          {beer.estilo} · {beer.alcohol} · {beer.ibu}
        </span>

        <h3 className={`text-[27px] ${nombreColor[beer.id]}`}>{beer.nombre}</h3>

        <p className="text-[15px] italic text-ink-soft">{beer.esencia}</p>

        <p className="flex-grow text-[15.5px] text-ink-soft">{beer.descripcion}</p>

        <p className="mt-1 border-t border-rule pt-[14px] text-[13.5px] text-ink-soft">
          <b className="font-semibold text-ink">Maridaje (sugerido):</b> {beer.maridaje}
        </p>
      </div>
    </article>
  )
}
