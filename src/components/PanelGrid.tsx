import { Link } from 'react-router-dom'
import { paneles } from '../data/content'

// Tintes del degradado y posición del foco, uno por panel.
const tintes = [
  { color: '#6f8f6a', x: '20%', y: '15%' },
  { color: '#7064d8', x: '70%', y: '30%' },
  { color: '#c4972f', x: '40%', y: '70%' },
  { color: '#c98a3a', x: '80%', y: '80%' },
]

export function PanelGrid() {
  return (
    <div className="grid grid-cols-2 bg-noche lg:grid-cols-4">
      {paneles.map((panel, i) => {
        const t = tintes[i]
        return (
          <Link
            key={panel.href}
            to={panel.href}
            className="group relative isolate flex aspect-3/4 flex-col justify-end overflow-hidden border-r border-b border-rule-dark px-[22px] py-[26px] last:border-r-0"
            style={{
              background: `radial-gradient(120% 90% at ${t.x} ${t.y}, color-mix(in srgb, ${t.color} 55%, transparent), transparent 60%), var(--color-noche-2)`,
            }}
          >
            {/* Velo violeta que aparece al pasar el cursor. */}
            <span className="pointer-events-none absolute inset-0 -z-10 bg-violeta opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-35" />

            <span className="mb-3 font-body text-[13px] italic text-hueso-dim">
              {panel.num}
            </span>
            <h3 className="text-[25px] text-white">{panel.titulo}</h3>
            <span className="mt-[14px] inline-flex items-center gap-1.5 text-[12.5px] tracking-[0.1em] uppercase text-violeta-pale">
              {panel.pie} →
            </span>
          </Link>
        )
      })}
    </div>
  )
}
