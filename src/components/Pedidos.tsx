import { contacto } from '../data/content'
import { Button } from './Button'
import { Eyebrow } from './Eyebrow'

const datos = [
  { etiqueta: 'Envío', valor: contacto.envio },
  { etiqueta: 'Correo', valor: contacto.email },
  { etiqueta: 'WhatsApp / Teléfono', valor: contacto.telefono },
]

export function Pedidos() {
  return (
    <section id="pedidos" className="py-[110px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <Eyebrow className="mb-3.5 block">Del tanque a tu puerta</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,44px)]">Pide la tuya</h2>
        </div>

        <div className="grid gap-px border border-rule bg-rule md:grid-cols-2">
          <div className="bg-paper px-11 py-[52px]">
            <Eyebrow>Cómo llega</Eyebrow>

            <dl className="mt-[26px]">
              {datos.map((d) => (
                <div key={d.etiqueta} className="mt-5 first:mt-0">
                  <dt className="text-xs tracking-[0.1em] text-violeta-deep uppercase">
                    {d.etiqueta}
                  </dt>
                  <dd className="mt-1.5 text-base text-ink">{d.valor}</dd>
                </div>
              ))}
            </dl>

            <Button href={contacto.tienda} external className="mt-7">
              Ir a la tienda
            </Button>
          </div>

          {/* Bloque de cobertura con textura diagonal sutil. */}
          <div
            className="flex min-h-[280px] items-center justify-center bg-paper-dim"
            style={{
              background:
                'repeating-linear-gradient(135deg, transparent 0 26px, color-mix(in srgb, var(--color-violeta) 12%, transparent) 26px 27px), var(--color-paper-dim)',
            }}
          >
            <div className="text-center">
              <svg
                className="mx-auto mb-2.5 h-[30px] w-[30px] text-violeta-deep"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
              <span className="text-[12.5px] tracking-[0.08em] text-ink-soft uppercase">
                Cobertura de envío: {contacto.ciudad.split(',')[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
