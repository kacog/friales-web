type Props = {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'line'
  external?: boolean
  className?: string
}

const base =
  'inline-block font-body text-[13.5px] tracking-[0.09em] uppercase px-[30px] py-[15px] rounded-[2px] border transition-colors duration-200'

const variants = {
  solid: 'bg-ink text-white border-ink hover:bg-violeta-deep hover:border-violeta-deep',
  line: 'bg-transparent text-ink border-rule hover:border-ink',
}

export function Button({
  href,
  children,
  variant = 'solid',
  external = false,
  className = '',
}: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
