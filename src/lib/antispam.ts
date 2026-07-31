const CLAVE = 'friales:envios-contacto'
const ESPERA_MS = 30_000 // entre un envío y el siguiente
const MAXIMO_POR_HORA = 5

type Registro = number[] // marcas de tiempo de los envíos recientes

function leer(): Registro {
  try {
    const crudo = localStorage.getItem(CLAVE)
    return crudo ? (JSON.parse(crudo) as Registro) : []
  } catch {
    return []
  }
}

function guardar(registro: Registro) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(registro))
  } catch {
    // Sin almacenamiento no llevamos cuenta; el honeypot sigue actuando.
  }
}

/**
 * Freno básico del lado del cliente. No sustituye a las validaciones de la
 * base de datos, solo evita envíos repetidos desde el mismo navegador.
 */
export function revisarLimite(): { permitido: true } | { permitido: false; motivo: string } {
  const ahora = Date.now()
  const recientes = leer().filter((t) => ahora - t < 3_600_000) // última hora

  const ultimo = recientes[recientes.length - 1]
  if (ultimo && ahora - ultimo < ESPERA_MS) {
    const faltan = Math.ceil((ESPERA_MS - (ahora - ultimo)) / 1000)
    return {
      permitido: false,
      motivo: `Espera ${faltan} segundos antes de enviar otro mensaje.`,
    }
  }

  if (recientes.length >= MAXIMO_POR_HORA) {
    return {
      permitido: false,
      motivo: 'Has enviado varios mensajes seguidos. Inténtalo de nuevo en un rato.',
    }
  }

  return { permitido: true }
}

export function registrarEnvio() {
  const ahora = Date.now()
  const recientes = leer().filter((t) => ahora - t < 3_600_000)
  guardar([...recientes, ahora])
}
