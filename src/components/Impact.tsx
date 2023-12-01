import clsx from 'clsx'

function Impact({
  name,
  children,
  invert = false,
}: {
  readonly name: string
  readonly children: React.ReactNode
  readonly invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Impacts({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul {...props}>
      <li>
        <Impact name="Plastic Recycled" invert={invert}>
          312 Billion Pounds
          <br />
          15 Planets Saved
        </Impact>
      </li>
      <li>
        <Impact name="Carbon Emissions Reduced" invert={invert}>
          12 million tons
          <br />
            1.5 million cars
        </Impact>
      </li>
    </ul>
  )
}
