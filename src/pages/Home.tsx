import { Beers } from '../components/Beers'
import { Comunidad } from '../components/Comunidad'
import { Hero } from '../components/Hero'
import { Lore } from '../components/Lore'
import { PanelGrid } from '../components/PanelGrid'
import { Pedidos } from '../components/Pedidos'

export function Home() {
  return (
    <>
      <Hero />
      <PanelGrid />
      <Beers />
      <Lore />
      <Pedidos />
      <Comunidad />
    </>
  )
}
