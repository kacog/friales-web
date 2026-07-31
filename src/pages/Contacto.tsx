import { ContactForm } from '../components/ContactForm'
import { Eyebrow } from '../components/Eyebrow'
import { PageHeader } from '../components/PageHeader'
import { contacto, redes } from '../data/content'

const datos = [
  { etiqueta: 'Correo', valor: contacto.email, href: `mailto:${contacto.email}` },
  {
    etiqueta: 'WhatsApp / Teléfono',
    valor: contacto.telefono,
    href: `tel:${contacto.telefonoHref}`,
  },
  { etiqueta: 'Ciudad', valor: contacto.ciudad },
]

export function Contacto() {
  return (
    <>
      <PageHeader
        eyebrow="Contáctanos"
        titulo="Escríbenos, mi llave"
        descripcion={contacto.ubicacion}
      />

      <section className="py-[100px]">
        <div className="mx-auto max-w-[1180px] px-8">
          <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow className="mb-3.5 block">Déjanos tus comentarios</Eyebrow>
              <h2 className="mb-8 text-[clamp(26px,3.2vw,34px)]">
                ¿Qué se te ofrece?
              </h2>
              <ContactForm />
            </div>

            <div>
              <Eyebrow className="mb-3.5 block">Datos directos</Eyebrow>
              <h2 className="mb-8 text-[clamp(26px,3.2vw,34px)]">Ubicación</h2>

              <dl className="border-t border-rule">
                {datos.map((d) => (
                  <div key={d.etiqueta} className="border-b border-rule py-5">
                    <dt className="text-[12px] tracking-[0.1em] text-violeta-deep uppercase">
                      {d.etiqueta}
                    </dt>
                    <dd className="mt-1.5 text-[16.5px] text-ink">
                      {d.href ? (
                        <a href={d.href} className="hover:text-violeta-deep">
                          {d.valor}
                        </a>
                      ) : (
                        d.valor
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-l-2 border-violeta bg-paper-dim px-6 py-5">
                <p className="text-[15px] text-ink-soft">{contacto.cobertura}</p>
              </div>

              <div className="mt-10">
                <Eyebrow className="mb-4 block">Síguenos</Eyebrow>
                {/* Sin enlazar: sirven de referencia hasta tener las URLs de cada perfil. */}
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {redes.map((red) => (
                    <li key={red} className="text-[14.5px] text-ink-soft">
                      {red}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
