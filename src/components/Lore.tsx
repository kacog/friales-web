import { lore } from '../data/content'
import { Eyebrow } from './Eyebrow'

export function Lore() {
  return (
    <section id="historia" className="bg-noche py-[110px] text-hueso">
      <div className="mx-auto grid max-w-[1180px] items-center gap-[70px] px-8 md:grid-cols-[0.85fr_1.15fr]">
        {/* Glifo inspirado en el ícono del logo: tres chevrones apilados. */}
        <svg
          className="mx-auto w-full max-w-[280px]"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="92" stroke="var(--color-rule-dark)" strokeWidth="2" />
          <path d="M100 46 L146 92 L128 92 L100 64 L72 92 L54 92 Z" fill="var(--color-violeta)" />
          <path d="M100 82 L146 128 L128 128 L100 100 L72 128 L54 128 Z" fill="var(--color-violeta-deep)" />
          <path d="M100 118 L146 164 L128 164 L100 136 L72 164 L54 164 Z" fill="var(--color-violeta-light)" />
        </svg>

        <div>
          <Eyebrow onDark>{lore.eyebrow}</Eyebrow>

          <blockquote className="mt-3.5 mb-[26px] font-display text-[clamp(22px,2.6vw,30px)] leading-[1.35] text-white italic text-balance">
            {lore.cita}
          </blockquote>

          {lore.parrafos.map((parrafo) => (
            <p key={parrafo} className="mb-4 text-[15.5px] text-hueso-dim">
              {parrafo}
            </p>
          ))}

          <cite className="mt-[22px] block text-[12.5px] tracking-[0.1em] text-violeta-pale uppercase not-italic">
            {lore.firma}
          </cite>
        </div>
      </div>
    </section>
  )
}
