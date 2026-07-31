import logo from '../assets/logo-friales.png'
import { hero } from '../data/content'
import { Button } from './Button'

export function Hero() {
  // El título lleva una palabra en cursiva violeta; la partimos en tres.
  const [antes, despues] = hero.titulo.split(hero.enfasis)

  return (
    <section className="relative px-8 pt-24 text-center">
      <div className="mx-auto max-w-[1180px]">
        <img
          src={logo}
          alt="FriAles cervecería"
          className="mx-auto mb-[34px] w-[340px] max-w-[70vw]"
        />

        <h1 className="mx-auto max-w-[16ch] text-[clamp(38px,6vw,68px)] text-ink">
          {antes}
          <em className="text-violeta-deep italic">{hero.enfasis}</em>
          {despues}
        </h1>

        <p className="mx-auto mt-[26px] max-w-[52ch] text-[18px] text-ink-soft">
          {hero.lede}
        </p>

        <div className="mt-[38px] flex flex-wrap justify-center gap-4">
          <Button href="#cervezas">Descubre las cervezas</Button>
          <Button href="#pedidos" variant="line">
            Pide la tuya
          </Button>
        </div>

        {/* Zigzag inspirado en el ícono del logo, como transición al bloque oscuro. */}
        <svg
          className="mt-[70px] h-[46px] w-full text-violeta"
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="0,10 25,32 50,10 75,32 100,10 125,32 150,10 175,32 200,10 225,32 250,10 275,32 300,10 325,32 350,10 375,32 400,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.55"
          />
        </svg>
      </div>
    </section>
  )
}
