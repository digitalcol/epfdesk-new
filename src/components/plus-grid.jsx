import { clsx } from 'clsx'

export function PlusGrid({ className = '', children }) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({ className = '', children }) {
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]',
      )}
    >
     
      {children}
    </div>
  )
}

export function PlusGridItem({ className = '', children }) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      
      {children}
    </div>
  )
}

export function PlusGridIcon({ className = '', placement }) {
  let [yAxis, xAxis] = placement.split(' ')

  let yClass = yAxis === 'top' ? '-top-2' : '-bottom-2'
  let xClass = xAxis === 'left' ? '-left-2' : '-right-2'

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        'absolute size-[15px] fill-black/10',
        yClass,
        xClass,
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  )
}
