# FriAles — Sitio web

Proyecto personal: el sitio web de **FriAles**, un emprendimiento de cerveza artesanal
de Barranquilla, Colombia.

FriAles nace de cuatro amigos barranquilleros con una pasión compartida por la ciudad y
la cultura cervecera. La marca tiene tres cervezas, cada una con su propia esencia dentro
de un universo narrativo inspirado en Ninkasi, la diosa sumeria de la cerveza:

| Cerveza | Estilo | Esencia |
|---|---|---|
| **Mancai** | Belgian Witbier · 4.5% · 17 IBU | Frescura, naturaleza y calma |
| **Jaguaryu** | American Pale Ale · 5.4% · 35 IBU | Fuerza, energía y aventura |
| **Mayaguaca** | Honey Ale · 5.2% · 23 IBU | Calidez, tradición y reflexión |

Este repositorio es una reconstrucción del sitio desde cero, migrando de WordPress a una
aplicación moderna en React. El objetivo era tener una base propia, rápida y fácil de
mantener, con el contenido separado del código para poder editar textos sin tocar
componentes.

## Tecnologías

| Herramienta | Versión | Para qué |
|---|---|---|
| [React](https://react.dev) | 19 | Librería de interfaz, con componentes por sección |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático en todo el proyecto |
| [Vite](https://vite.dev) | 8 | Servidor de desarrollo y empaquetado de producción |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos por utilidades, con los tokens de marca en `@theme` |
| [React Router](https://reactrouter.com) | 7 | Enrutamiento del lado del cliente |
| [Supabase](https://supabase.com) | 2 | Base de datos para los mensajes del formulario |

Sin dependencias de UI externas: los componentes, la retícula y el sistema visual están
escritos a mano para ajustarse a la identidad de la marca.

### Decisiones de diseño

- **Paleta y tipografía como tokens.** La identidad (negro, violeta `#7064D8`, blanco y
  los colores de apoyo de cada cerveza) vive en un solo bloque `@theme` de Tailwind, así
  que un cambio de marca se hace en un archivo.
- **Contenido separado del código.** Todos los textos están en `src/data/`, de modo que
  actualizar una descripción no obliga a entender React.
- **Serif editorial.** Tipografías con serifa de alto contraste para títulos y una serif
  cálida para el cuerpo, buscando un aire artesanal antes que corporativo.
- **Verificación de edad.** Obligatoria por tratarse de bebidas alcohólicas; se recuerda
  durante la sesión para no molestar al navegar entre páginas.

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Landing: hero, cervezas, mito de Ninkasi, pedidos |
| `/nosotros` | Quiénes somos, misión y visión |
| `/cultura-cervecera` | Listado de artículos del blog |
| `/cultura-cervecera/:slug` | Artículo completo |
| `/contacto` | Formulario y datos de contacto |

## Estructura

```
src/
├── data/          Textos, cervezas y artículos — edita aquí para cambiar el copy
├── pages/         Una página por ruta
├── components/    Componentes compartidos (Layout monta header, footer y scroll)
├── lib/           Cliente de Supabase y freno anti-spam
├── assets/        Logo y fotos de producto
└── index.css      Tokens de marca en el bloque @theme de Tailwind
```

## Formulario de contacto

Funciona en dos modos según haya credenciales de Supabase configuradas:

- **Sin configurar (estado actual):** valida los campos, aplica el anti-spam y confirma
  en pantalla, pero no guarda nada.
- **Con Supabase configurado:** además inserta el mensaje en la tabla `mensajes_contacto`.

### Activar Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. Abre **SQL Editor → New query**, pega el contenido de [`supabase/setup.sql`](supabase/setup.sql)
   y ejecútalo. Crea la tabla, activa Row Level Security y deja una única política:
   cualquiera puede *insertar*, nadie puede *leer* desde el navegador.
3. Copia `.env.example` como `.env` y rellena las dos variables (están en
   **Project Settings → API**):

   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key
   ```

4. Reinicia `npm run dev`. Los mensajes se leen en **Table Editor → mensajes_contacto**.

> **Sobre las claves:** usa únicamente la clave `anon`, que es pública por diseño. Todo lo
> que empieza por `VITE_` acaba dentro del JavaScript que descarga el visitante. La clave
> `service_role` nunca debe ponerse aquí: salta el Row Level Security y daría acceso
> completo a la base de datos.

### Anti-spam

- **Campo trampa** (*honeypot*): invisible y fuera del recorrido con teclado. Si viene
  relleno, se muestra la confirmación pero el mensaje se descarta.
- **Límite de envíos:** 30 segundos entre mensajes y un máximo de 5 por hora y navegador.
- **Validación en la base:** la política SQL repite los límites de longitud, así que
  aunque alguien evite el formulario no puede insertar contenido basura.

## Pendientes

1. **Redes sociales.** Aparecen listadas como texto, sin enlazar, hasta tener las URLs de
   cada perfil (`Footer.tsx` y `Contacto.tsx`).
2. **Menciones de marca en el blog.** Dos artículos heredados del WordPress original
   nombraban a otra cervecería; se adaptaron a FriAles y las líneas quedaron marcadas con
   `[marca adaptada]` en `src/data/articulos.ts` para revisarlas.
3. **Despliegue.** Al ser una SPA, el servidor debe redirigir todas las rutas a
   `index.html` para que `/nosotros` y demás funcionen al recargar (en Netlify y Vercel es
   el comportamiento por defecto). Recuerda cargar las variables de entorno en el panel
   del proveedor.

## Créditos

El logotipo, las fotografías de producto y los textos de marca pertenecen a FriAles
Cervecería. Parte del contenido editorial proviene del sitio original en
[friales.com](https://friales.com).

---

*El exceso de alcohol es perjudicial para la salud. Prohíbase el expendio de bebidas
embriagantes a menores de edad.*
