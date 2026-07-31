type Props = {
  children: React.ReactNode
  /** Sobre fondo oscuro el violeta se aclara para mantener contraste. */
  onDark?: boolean
  className?: string
}

export function Eyebrow({ children, onDark = false, className = '' }: Props) {
  return (
    <span
      className={`text-[12.5px] tracking-[0.16em] uppercase italic ${
        onDark ? 'text-violeta-pale' : 'text-violeta-deep'
      } ${className}`}
    >
      {children}
    </span>
  )
}
