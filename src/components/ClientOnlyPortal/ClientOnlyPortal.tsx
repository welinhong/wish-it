import { ReactNode, ReactPortal, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export interface Props {
  selector: string
  children: ReactNode
}

const ClientOnlyPortal = (props: Props): ReactPortal | null => {
  const { selector, children } = props

  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal
