import { useState, type FormEvent } from 'react'
import { registrarEnvio, revisarLimite } from '../lib/antispam'
import { guardarMensaje, supabaseActivo } from '../lib/supabase'
import { contacto } from '../data/content'

type Campos = { nombre: string; email: string; mensaje: string }
type Errores = Partial<Record<keyof Campos, string>>

const vacio: Campos = { nombre: '', email: '', mensaje: '' }

function validar({ nombre, email, mensaje }: Campos): Errores {
  const errores: Errores = {}
  if (!nombre.trim()) errores.nombre = 'Cuéntanos cómo te llamas.'
  else if (nombre.trim().length > 100) errores.nombre = 'El nombre es demasiado largo.'

  if (!email.trim()) errores.email = 'Necesitamos un correo para responderte.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errores.email = 'Revisa el correo, parece incompleto.'

  const largo = mensaje.trim().length
  if (largo < 10) errores.mensaje = 'Escríbenos al menos unas palabras (mínimo 10 caracteres).'
  else if (largo > 2000) errores.mensaje = 'El mensaje es muy largo (máximo 2000 caracteres).'

  return errores
}

const inputBase =
  'w-full border border-rule bg-paper px-4 py-3 text-[15.5px] text-ink transition-colors focus:border-violeta focus:outline-none'

const etiqueta = 'mb-2 block text-[12.5px] tracking-[0.1em] text-violeta-deep uppercase'

export function ContactForm() {
  const [campos, setCampos] = useState<Campos>(vacio)
  const [errores, setErrores] = useState<Errores>({})
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [fallo, setFallo] = useState<string | null>(null)
  // Campo trampa: las personas no lo ven, los bots suelen rellenarlo.
  const [trampa, setTrampa] = useState('')

  const actualizar = (campo: keyof Campos, valor: string) => {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo]) setErrores((prev) => ({ ...prev, [campo]: undefined }))
    if (fallo) setFallo(null)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Si la trampa trae texto, fingimos éxito y descartamos el envío.
    if (trampa) {
      setEnviado(true)
      return
    }

    const nuevos = validar(campos)
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) return

    const limite = revisarLimite()
    if (!limite.permitido) {
      setFallo(limite.motivo)
      return
    }

    setEnviando(true)
    setFallo(null)

    try {
      if (supabaseActivo) {
        await guardarMensaje({
          nombre: campos.nombre.trim(),
          email: campos.email.trim(),
          mensaje: campos.mensaje.trim(),
        })
      }
      // Sin Supabase configurado el formulario solo confirma en pantalla.
      registrarEnvio()
      setEnviado(true)
      setCampos(vacio)
    } catch {
      setFallo(
        `No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a ${contacto.email}.`,
      )
    } finally {
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className="border border-rule bg-paper px-10 py-14 text-center">
        <p className="font-display text-[24px] text-ink">¡Gracias por escribirnos!</p>
        <p className="mt-3 text-[15.5px] text-ink-soft">
          Recibimos tus comentarios. Te respondemos pronto desde {contacto.email}.
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="mt-7 cursor-pointer text-[12.5px] tracking-[0.1em] text-violeta-deep uppercase"
        >
          Escribir otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="nombre" className={etiqueta}>
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          value={campos.nombre}
          onChange={(e) => actualizar('nombre', e.target.value)}
          aria-invalid={!!errores.nombre}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          className={`${inputBase} ${errores.nombre ? 'border-jaguaryu' : ''}`}
        />
        {errores.nombre && (
          <p id="error-nombre" className="mt-1.5 text-[13.5px] text-jaguaryu">
            {errores.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={etiqueta}>
          Correo
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={campos.email}
          onChange={(e) => actualizar('email', e.target.value)}
          aria-invalid={!!errores.email}
          aria-describedby={errores.email ? 'error-email' : undefined}
          className={`${inputBase} ${errores.email ? 'border-jaguaryu' : ''}`}
        />
        {errores.email && (
          <p id="error-email" className="mt-1.5 text-[13.5px] text-jaguaryu">
            {errores.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className={etiqueta}>
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={5}
          value={campos.mensaje}
          onChange={(e) => actualizar('mensaje', e.target.value)}
          aria-invalid={!!errores.mensaje}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          className={`${inputBase} resize-y ${errores.mensaje ? 'border-jaguaryu' : ''}`}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="mt-1.5 text-[13.5px] text-jaguaryu">
            {errores.mensaje}
          </p>
        )}
      </div>

      {/* Trampa para bots: fuera de la vista y del recorrido con teclado. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="empresa">No rellenar</label>
        <input
          id="empresa"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={trampa}
          onChange={(e) => setTrampa(e.target.value)}
        />
      </div>

      {fallo && (
        <p role="alert" className="text-[14px] text-jaguaryu">
          {fallo}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 cursor-pointer self-start rounded-[2px] border border-ink bg-ink px-[30px] py-[15px] font-body text-[13.5px] tracking-[0.09em] text-white uppercase transition-colors hover:border-violeta-deep hover:bg-violeta-deep disabled:cursor-wait disabled:opacity-60"
      >
        {enviando ? 'Enviando…' : 'Enviar comentarios'}
      </button>
    </form>
  )
}
