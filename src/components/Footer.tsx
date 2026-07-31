import { Link } from 'react-router-dom'
import { avisoLegal, contacto, navegacion, redes } from '../data/content'

const tituloColumna =
  'mb-4 font-body text-[12.5px] tracking-[0.1em] text-white uppercase'

export function Footer() {
  return (
    <footer className="bg-noche pt-16 pb-[30px] text-hueso-dim">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid gap-10 border-b border-rule-dark pb-11 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-2.5 font-display text-[22px] font-bold text-white">
              Fri<span className="text-violeta-light">Ales</span>
            </p>
            <p className="text-[14.5px] leading-[1.7]">
              Cervecería artesanal colombiana con identidad caribeña. Cultura cervecera,
              rituales y comunidad — con Ninkasi como guía.
            </p>
          </div>

          <div>
            <h4 className={tituloColumna}>Navegación</h4>
            <ul className="flex flex-col gap-2.5 text-[14.5px]">
              {navegacion.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={tituloColumna}>Contacto</h4>
            <ul className="flex flex-col gap-2.5 text-[14.5px]">
              <li>{contacto.ciudad}</li>
              <li>
                <a href={`mailto:${contacto.email}`} className="hover:text-white">
                  {contacto.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contacto.telefonoHref}`} className="hover:text-white">
                  {contacto.telefono}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={tituloColumna}>Síguenos</h4>
            {/* Sin enlazar: sirven de referencia hasta tener las URLs de cada perfil. */}
            <ul className="flex flex-col gap-2.5 text-[14.5px]">
              {redes.map((red) => (
                <li key={red}>{red}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-[26px] text-[12.5px] tracking-[0.04em]">
          <span>© {new Date().getFullYear()} FriAles Cervecería.</span>
          <span>{avisoLegal}</span>
        </div>
      </div>
    </footer>
  )
}
