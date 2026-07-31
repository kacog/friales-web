-- Formulario de contacto de FriAles.
-- Pega esto en Supabase → SQL Editor → New query → Run.

-- 1. Tabla donde caen los mensajes.
create table if not exists public.mensajes_contacto (
  id uuid primary key default gen_random_uuid(),
  creado_en timestamptz not null default now(),
  nombre text not null,
  email text not null,
  mensaje text not null
);

-- 2. Row Level Security: sin políticas, nadie toca la tabla desde el navegador.
alter table public.mensajes_contacto enable row level security;

-- 3. Única excepción: cualquier visitante puede INSERTAR (nunca leer),
--    y solo si los campos vienen con un tamaño razonable.
--    Estos límites son los mismos que valida el formulario, pero aplicados
--    en la base: aunque alguien salte el formulario, no puede meter basura.
drop policy if exists "visitantes pueden enviar mensajes" on public.mensajes_contacto;

create policy "visitantes pueden enviar mensajes"
  on public.mensajes_contacto
  for insert
  to anon
  with check (
    char_length(nombre) between 1 and 100
    and char_length(email) between 5 and 150
    and char_length(email) = char_length(trim(email))
    and position('@' in email) > 1
    and char_length(mensaje) between 10 and 2000
  );

-- Nota: no se crea ninguna política de SELECT a propósito. Los mensajes se
-- leen desde el panel de Supabase (Table Editor), que usa credenciales de
-- administrador. Con la clave anon del sitio es imposible listarlos.

-- 4. Índice para ordenar por fecha al revisarlos.
create index if not exists mensajes_contacto_creado_en_idx
  on public.mensajes_contacto (creado_en desc);
