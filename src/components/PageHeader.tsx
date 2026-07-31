import { Eyebrow } from './Eyebrow'

type Props = {
  eyebrow: string
  titulo: string
  descripcion?: string
}

/** Cabecera oscura de las páginas internas; hace de relevo del hero del home. */
export function PageHeader({ eyebrow, titulo, descripcion }: Props) {
  return (
    <section className="bg-noche px-8 pt-[70px] pb-[76px] text-center text-hueso">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow onDark className="mb-4 block">
          {eyebrow}
        </Eyebrow>

        <h1 className="mx-auto max-w-[18ch] text-[clamp(32px,5vw,54px)] text-white">
          {titulo}
        </h1>

        {descripcion && (
          <p className="mx-auto mt-6 max-w-[54ch] text-[17px] text-hueso-dim">
            {descripcion}
          </p>
        )}
      </div>
    </section>
  )
}
