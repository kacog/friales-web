import jaguaryuImg from '../assets/jaguaryu.png'
import mancaiImg from '../assets/mancai.png'
import mayaguacaImg from '../assets/mayaguaca.png'

export type Beer = {
  /** Identificador usado también para el color de acento de la tarjeta. */
  id: 'mancai' | 'jaguaryu' | 'mayaguaca'
  nombre: string
  estilo: string
  alcohol: string
  ibu: string
  /** Esencia del universo narrativo de FriAles. */
  esencia: string
  descripcion: string
  /** Sugerencia editorial nuestra, no un dato del sitio oficial. */
  maridaje: string
  imagen: string
  /** Color de apoyo con el que se tiñe el fondo de la botella. */
  tinte: string
}

export const beers: Beer[] = [
  {
    id: 'mancai',
    nombre: 'Mancai',
    estilo: 'Belgian Witbier',
    alcohol: '4.5% alc.',
    ibu: '17 IBU',
    esencia: 'Frescura, naturaleza y calma.',
    descripcion:
      'Trigo suave, cáscara de cítricos y un toque especiado que recuerda la brisa entre los manglares. Turbia, ligera y refrescante — la que te tomas pa’ bajar el calor sin apuro.',
    maridaje: 'pescado frito, ceviche o un mediodía sin planes.',
    imagen: mancaiImg,
    tinte: 'var(--color-mancai)',
  },
  {
    id: 'jaguaryu',
    nombre: 'Jaguaryu',
    estilo: 'American Pale Ale',
    alcohol: '5.4% alc.',
    ibu: '35 IBU',
    esencia: 'Fuerza, energía y aventura.',
    descripcion:
      'Dorada, lupulada y de cuerpo firme, con notas de maracuyá que le dan un toque tropical y un final que se queda rugiendo. La que se pide cuando el parche va en serio.',
    maridaje: 'costillas a la brasa, quesos curados o una noche larga de conversa.',
    imagen: jaguaryuImg,
    tinte: 'var(--color-jaguaryu)',
  },
  {
    id: 'mayaguaca',
    nombre: 'Mayaguaca',
    estilo: 'Honey Ale',
    alcohol: '5.2% alc.',
    ibu: '23 IBU',
    esencia: 'Calidez, tradición y reflexión.',
    descripcion:
      'Ámbar, con notas de miel y malta tostada que le dan un cuerpo amplio que abriga como cuento de abuela. La que se saborea despacio, escuchando esa vaina que llevas contando toda la semana.',
    maridaje: 'postres con panela, quesos añejos o una sobremesa que no acaba.',
    imagen: mayaguacaImg,
    tinte: 'var(--color-mayaguaca)',
  },
]

export const hero = {
  titulo: 'Donde el Caribe fermenta su propia leyenda',
  /** La palabra del título que va en cursiva violeta. */
  enfasis: 'fermenta',
  lede: 'Celebremos la unión de ideas, sabores y personas. FriAles es cervecería artesanal colombiana: tres esencias nacidas de la brisa, el sol y la tierra de nuestra costa, en homenaje a Ninkasi, la diosa que primero le enseñó al mundo a fermentar.',
}

export const paneles = [
  { num: '01', titulo: 'Cervezas', pie: 'Nerdea con nosotros', href: '/#cervezas' },
  { num: '02', titulo: 'Pide la tuya', pie: 'Envíos y contacto', href: '/#pedidos' },
  {
    num: '03',
    titulo: 'Cultura Cervecera',
    pie: 'Estilos, datos y escena',
    href: '/cultura-cervecera',
  },
  { num: '04', titulo: 'Nosotros', pie: 'Quiénes somos', href: '/nosotros' },
]

export const navegacion = [
  { label: 'Cervezas', href: '/#cervezas' },
  { label: 'Cultura Cervecera', href: '/cultura-cervecera' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export const lore = {
  eyebrow: 'El mito que nos funda',
  cita: '«Cuentan que Ninkasi cruzó mares y milenios, y que al llegar a nuestra costa decidió quedarse.»',
  parrafos: [
    'Hace más de cuatro mil años, en Sumeria, Ninkasi era la diosa que guardaba el secreto de fermentar el grano. La leyenda dice que su receta viajó de puerto en puerto hasta encontrar, en el Caribe colombiano, tierra fértil para echar raíces de nuevo.',
    'De ese encuentro nacieron tres esencias — Mancai, Jaguaryu y Mayaguaca — cada una con su propio carácter, pero todas fieles al mismo ritual: agua, grano, tiempo y un parche donde compartirlas.',
  ],
  firma: 'FriAles — cervecería artesanal',
}

export const contacto = {
  ciudad: 'Barranquilla, Colombia',
  email: 'info@friales.com',
  telefono: '+57 324 599 4113',
  telefonoHref: '+573245994113',
  envio: 'Gratis en Barranquilla en compras desde $50.000',
  tienda: 'https://friales.com',
  ubicacion:
    'Entre el mar Caribe y el Río Magdalena. Cerveza artesanal de la bella ciudad de Barranquilla.',
  cobertura: 'Por el momento sólo envíos dentro de la ciudad. Próximamente a toda Colombia.',
}

/** Textos de la página «Nosotros», tomados de friales.com/acerca-de. */
export const nosotros = {
  eyebrow: '¿Quiénes somos?',
  titulo: 'Cuatro llaves de Barranquilla',
  intro:
    'Somos cuatro llaves de Barranquilla, unidos por una pasión hacia esta ciudad y la cultura cervecera. La idea surgió mientras disfrutábamos de cerveza artesanal en Barrio Abajo.',
  parrafos: [
    'El equipo está conformado por ingenieros que han invertido años estudiando la elaboración cervecera, la gestión empresarial y la atención al cliente.',
    'FriAles busca posicionarse como símbolo de la ciudad y la región, impulsando el reconocimiento de Barranquilla y la costa Caribe como destinos para cervecería de calidad.',
  ],
  pilares: [
    {
      titulo: 'Misión',
      texto:
        'Brindar experiencias auténticas a través de un producto artesanal que integre la cultura colombiana y cervecera.',
    },
    {
      titulo: 'Visión',
      texto:
        'Ser reconocidos en la industria cervecera de nuestro país por la divulgación de la cultura cervecera en nuestra región.',
    },
  ],
}

export const redes = ['Instagram', 'Facebook', 'X', 'TikTok', 'WhatsApp']

export const comunidad = {
  eyebrow: 'Nosotros',
  cita: '«La comunidad es la protagonista — el parche también se arma afuera. Cuéntanos dónde te tomas la próxima FriAles.»',
}

/** Advertencia obligatoria para bebidas alcohólicas en Colombia. */
export const avisoLegal =
  'El exceso de alcohol es perjudicial para la salud. Prohíbase el expendio de bebidas embriagantes a menores de edad.'
