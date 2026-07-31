import { beers } from '../data/content'
import { BeerCard } from './BeerCard'
import { Eyebrow } from './Eyebrow'

export function Beers() {
  return (
    <section id="cervezas" className="py-[110px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <Eyebrow className="mb-3.5 block">Tres esencias, un mismo Caribe</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Nuestras cervezas</h2>
        </div>

        {/* El gap de 1px sobre el fondo dibuja las líneas divisorias. */}
        <div className="grid gap-px border border-rule bg-rule md:grid-cols-3">
          {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </section>
  )
}
