import { useRef, ReactNode } from 'react'
import './styles/snackbar.css'

export const useSnackbar = () => {
  const snackbarContent = useRef<HTMLDivElement | null>(null)
  const info = useRef<HTMLDivElement | null>(null)

  type snackbarProps = { children: ReactNode }
  const Snackbar = ({ children}: snackbarProps) => (
    <div id='snackbar' ref={snackbarContent}>
      {children}
      <div ref={info}></div>
    </div>
  )

  const showSnackbar = (message: string = '') => {
    info.current!.innerHTML = message
    setTimeout(() => {
      const x = snackbarContent.current as HTMLDivElement
      x.className = 'show'
      setTimeout(() => {
        x.className = x.className.replace('show', '')
      }, 3000)
    }, 0)
  }

  return [Snackbar, showSnackbar]
}
