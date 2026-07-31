import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * El cliente solo existe si el proyecto está configurado en .env.
 * Mientras no lo esté, el formulario funciona en modo demostración: valida y
 * confirma en pantalla, pero no guarda nada.
 *
 * Aquí va únicamente la clave *anon* (pública, pensada para el navegador).
 * La clave service_role nunca debe llegar al frontend.
 */
export const supabase = url && anonKey ? createClient(url, anonKey) : null

export const supabaseActivo = supabase !== null

export type MensajeContacto = {
  nombre: string
  email: string
  mensaje: string
}

export async function guardarMensaje(datos: MensajeContacto) {
  if (!supabase) throw new Error('Supabase no está configurado')
  const { error } = await supabase.from('mensajes_contacto').insert(datos)
  if (error) throw error
}
