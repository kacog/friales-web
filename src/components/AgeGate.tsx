import { useState } from 'react'
import logo from '../assets/logo-friales.png'
import { avisoLegal } from '../data/content'

const CLAVE = 'friales:edad-confirmada'

/** sessionStorage falla en modo privado de algunos navegadores. */
function leerConfirmacion() {
  try {
    return sessionStorage.getItem(CLAVE) === 'si'
  } catch {
    return false
  }
}

function guardarConfirmacion() {
  try {
    sessionStorage.setItem(CLAVE, 'si')
  } catch {
    // Sin almacenamiento el visitante confirmará de nuevo; no es un error.
  }
}

export function AgeGate() {
  const [estado, setEstado] = useState<'preguntando' | 'rechazado' | 'aceptado'>(() =>
    leerConfirmacion() ? 'aceptado' : 'preguntando',
  )

  if (estado === 'aceptado') return null

  const aceptar = () => {
    guardarConfirmacion()
    setEstado('aceptado')
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-noche p-8 text-center text-hueso">
      <div className="max-w-[420px]">
        <img
          src={logo}
          alt="FriAles cervecería"
          className="mx-auto mb-8 w-[230px] max-w-[70vw]"
        />

        {estado === 'preguntando' ? (
          <>
            <h2 className="mb-3 text-[26px] text-white">
              ¿Ya cumpliste la mayoría de edad?
            </h2>
            <p className="mb-7 text-[15px] text-hueso-dim">
              FriAles es cervecería artesanal. {avisoLegal} Confírmanos que eres mayor
              para entrar.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={aceptar}
                className="cursor-pointer rounded-[2px] border border-violeta bg-violeta px-7 py-[13px] font-body text-sm tracking-[0.06em] text-white uppercase transition-colors hover:border-violeta-deep hover:bg-violeta-deep"
              >
                Sí, soy mayor
              </button>
              <button
                onClick={() => setEstado('rechazado')}
                className="cursor-pointer rounded-[2px] border border-rule-dark bg-transparent px-7 py-[13px] font-body text-sm tracking-[0.06em] text-hueso-dim uppercase transition-colors hover:border-hueso-dim hover:text-white"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-3 text-[26px] text-white">
              Vuelve cuando cumplas la mayoría de edad
            </h2>
            <p className="text-[15px] text-hueso-dim">
              FriAles es para mayores de edad. Te esperamos con una pola cuando llegue el
              momento.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
