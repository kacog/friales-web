import { comunidad, redes } from '../data/content'
import { Eyebrow } from './Eyebrow'

export function Comunidad() {
  return (
    <section id="comunidad" className="bg-noche py-[110px] text-center text-hueso">
      <div className="mx-auto max-w-[1180px] px-8">
        <Eyebrow onDark>{comunidad.eyebrow}</Eyebrow>

        <blockquote className="mx-auto mt-3.5 mb-[30px] max-w-[20ch] font-display text-[clamp(24px,3.4vw,36px)] text-white italic text-balance">
          {comunidad.cita}
        </blockquote>

        <p className="text-sm tracking-[0.08em] text-violeta-pale uppercase">
          {redes.join(' · ')}
        </p>
      </div>
    </section>
  )
}
