export type Articulo = {
  slug: string
  titulo: string
  fecha: string
  /** Fecha ISO para el atributo datetime y para ordenar. */
  fechaISO: string
  categoria: string
  extracto: string
  parrafos: string[]
  /** URL del artículo original en el WordPress de friales.com. */
  original: string
}

/*
  NOTA DE REVISIÓN
  ----------------
  En friales.com estos artículos nombran a «Cerveza Sinfonía» y «Sinfonía
  Cerveza Artesanal» — contenido de otra marca que quedó sin adaptar en el
  borrador de WordPress. Aquí esas menciones se reemplazaron por FriAles;
  el resto del texto está transcrito literalmente. Las líneas afectadas van
  marcadas con «[marca adaptada]» para que sea fácil revisarlas.
*/

export const articulos: Articulo[] = [
  {
    slug: 'brindis-en-barranquilla-cervezas-y-amistad',
    titulo: 'Brindis en Barranquilla: Cervezas y Amistad',
    fecha: 'Julio 2024',
    fechaISO: '2024-07-01',
    categoria: 'Blog',
    extracto:
      'En Barranquilla, donde el calor caribeño se mezcla con la alegría de su gente, no hay nada que celebre mejor la amistad que una buena cerveza.',
    parrafos: [
      'En Barranquilla, donde el calor caribeño se mezcla con la alegría de su gente, no hay nada que celebre mejor la amistad que una buena cerveza. Este elixir dorado no solo es una bebida refrescante, sino también un puente que une a las personas, creando momentos inolvidables y forjando lazos que duran toda la vida.',
      'La cerveza artesanal ha encontrado un hogar especial en nuestra ciudad. Con una variedad de sabores y estilos que van desde las ligeras y afrutadas hasta las robustas y maltosas, cada botella es una nueva aventura. Los cerveceros locales, con su pasión y creatividad, nos ofrecen experiencias únicas que reflejan el espíritu vibrante de Barranquilla.',
      'La verdadera magia de la cerveza se revela cuando la compartimos con amigos. No importa si estamos en una terraza frente al mar, en un bar local o en una parrillada en casa, una cerveza fría siempre parece hacer que las conversaciones fluyan y las risas sean más sonoras. Es en estos momentos donde la amistad se fortalece, y las historias y anécdotas se entrelazan con cada sorbo.',
      'Barranquilla es conocida por su animada vida social, y la cerveza juega un papel fundamental en muchos de nuestros eventos y encuentros. Desde ferias cerveceras hasta catas privadas, cada evento es una oportunidad para descubrir nuevos sabores y conocer a personas que comparten nuestra pasión. Estos encuentros no solo celebran la cerveza, sino también la fraternidad y la alegría de estar juntos.',
      'En última instancia, la cerveza es más que una bebida; es un símbolo de amistad y comunidad. Nos recuerda que, a pesar de nuestras diferencias, siempre hay algo que puede unirnos. Así que, la próxima vez que levantes tu vaso, recuerda que estás participando en una tradición que celebra la hermandad y el compañerismo.',
      'En Barranquilla, la espuma de una buena cerveza y la calidez de una amistad sincera son el complemento perfecto. ¡Salud por esos momentos que nos hacen sentir vivos y conectados!',
    ],
    original: 'https://friales.com/brindis-en-barranquilla-cervezas-y-amistad/',
  },
  {
    slug: 'levantando-cervezas-barranquilla-rumbo-al-top-mundial',
    titulo: 'Levantando Cervezas: Barranquilla en la Ruta hacia el Top Mundial',
    fecha: 'Julio 2024',
    fechaISO: '2024-07-15',
    categoria: 'Blog',
    extracto:
      '¿Alguna vez se han preguntado cuánto realmente disfrutamos de nuestra querida cerveza aquí en Colombia y cómo nos comparamos con el resto del mundo?',
    parrafos: [
      '¡Saludos, amantes de la cerveza! ¿Alguna vez se han preguntado cuánto realmente disfrutamos de nuestra querida cerveza aquí en Colombia y cómo nos comparamos con el resto del mundo? Bueno, prepárense porque vamos a sumergirnos en el mundo del consumo de cerveza, tanto a nivel local como global.',
      'A nivel mundial, la cerveza es claramente una de las bebidas favoritas, con un consumo que supera los 192 millones de kilolitros en 2022. Comparando esto con otras bebidas populares como el café y el té, la cerveza se destaca notoriamente. Mientras que el café tiene un consumo global de unos 166 millones de sacos anuales (considerando que cada saco pesa aproximadamente 60 kg), el consumo de té se mide en miles de millones de tazas al año. Esto nos indica que aunque el café y el té son extremadamente populares, en términos de volumen líquido, la cerveza domina en muchas partes del mundo.',
      'Sin embargo, la República Checa se lleva el oro con un impresionante promedio de 144 litros por persona al año, el más alto del mundo. Mientras tanto, en Latinoamérica, Panamá lidera con 75 litros, seguido de México y Paraguay con 68 y 66 litros respectivamente.',
      'En Colombia, aunque nuestro promedio de 51 litros por persona puede parecer modesto en comparación con estos campeones, no nos quedamos atrás en pasión. De hecho, en ciudades como Bogotá, Medellín y Barranquilla, el amor por la cerveza se siente fuerte y claro. Bogotá encabeza el consumo nacional con un 47% del total, destacándose incluso en días fríos, cuando una cerveza siempre cae bien.',
      // [marca adaptada] el original decía «nuestra querida Cerveza Sinfonía».
      'En Barranquilla, aunque solo representamos el 8% del consumo del país según datos de Rappi, nuestra vibrante escena local está creciendo cada día más. Esto nos dice que hay mucho potencial para crecer y explorar nuevas cervezas artesanales y locales como nuestra querida FriAles.',
      'Entonces, ¿cómo podemos hacer que Barranquilla y Colombia escalen en este ranking de consumo de cerveza? Apoyando a nuestras cervecerías locales y probando cervezas artesanales y especiales, no solo disfrutamos de sabores únicos y de calidad, sino que también contribuimos a la economía local y fortalecemos nuestra comunidad cervecera.',
      // [marca adaptada] el original decía «disfrutar de una buena Sinfonía».
      'Así que, ¿por qué no hacer de esto un reto personal y local? Vamos a elevar a Barranquilla y a disfrutar de una buena FriAles. ¡Por más tardes refrescantes y noches de brindis con amigos, siempre con una buena cerveza en mano! ¿Te unes al brindis por Barranquilla? ¡Salud por eso!',
    ],
    original:
      'https://friales.com/levantando-cervezas-barranquilla-en-la-ruta-hacia-el-top-mundial/',
  },
  {
    slug: 'cerveza-para-todos-encuentra-tu-estilo',
    titulo: 'Cerveza para Todos: Encuentra tu Estilo',
    fecha: 'Abril 2024',
    fechaISO: '2024-04-01',
    categoria: 'Estilos',
    extracto:
      'Según la Beer Judge Certification Program hay más de 100 estilos de cerveza reconocidos. Un vasto mar de sabores y aromas esperando por ser explorado.',
    parrafos: [
      'Piensa en esto: es un día caluroso y lo único que quieres es algo fresco y ligero que les refresque. Aquí es donde una refrescante Kölsch alemana o una American Blonde Ale podrían convertirse en tu nueva favorita. Pero si lo tuyo es algo con más carácter y audacia, tal vez una Double IPA con su explosión de lúpulo capture tu paladar en el acto.',
      '¡Hola, amantes de la cerveza! ¿Se han preguntado cuántos estilos diferentes de cerveza existen? Según la Beer Judge Certification Program (BJCP), hay más de 100 estilos de cerveza oficialmente reconocidos. Desde la ligereza de una Light Lager hasta la intensidad de una Imperial Stout, el universo cervecero es un vasto mar de sabores y aromas esperando por ser explorado.',
      'Pero ahí no termina la cosa. ¿Has probado alguna vez una Gose? Originaria de Alemania, esta cerveza de trigo es ligeramente ácida y tiene un toque de sal. Sí, ¡sal! Y si prefieres una experiencia más compleja y sofisticada, déjate seducir por una Belgian Strong Dark Ale, donde cada sorbo cuenta una historia llena de complejidad y profundidad.',
      'Y eso es solo el comienzo. En nuestra cervecería, estamos convencidos de que cada persona puede encontrar su cerveza ideal, esa que parece haber sido creada especialmente para ellos. Por eso los invitamos a explorar, experimentar y, sobre todo, disfrutar del viaje cervecero.',
      // [marca adaptada] el original decía «la tienda de Sinfonía Cerveza Artesanal».
      'Si estás en Barranquilla, Colombia y aún no has encontrado tu cerveza ideal, o simplemente estás en busca de tu próxima gran pasión cervecera, ¿por qué no le das un vistazo a la tienda de FriAles? Tenemos una selección que seguramente te sorprenderá y, quién sabe, quizás entre nuestras opciones esté esa cerveza que te robe el corazón.',
      'En este mundo de posibilidades, cada cerveza tiene una historia que contar. ¿Estás listo para encontrar la tuya? ¡Salud! y a disfrutar del maravilloso mundo de la cerveza.',
    ],
    original: 'https://friales.com/cerveza-para-todos-encuentra-tu-estilo/',
  },
]

export function getArticulo(slug?: string) {
  return articulos.find((a) => a.slug === slug)
}
