import clsx from 'clsx'

export function TagList({
  children,
  className,
}: {
  readonly children: React.ReactNode
  readonly className?: string
}) {
  return <ul className={clsx(className, 'flex flex-wrap gap-4')}>{children}</ul>
}

export function TagListItem({
  children,
  className,
}: {
  readonly children: React.ReactNode
  readonly className?: string
}) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className,
      )}
    >
      {children}
    </li>
  )
}
