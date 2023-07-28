import { useRef, useEffect, ReactNode } from 'react'
import './styles/modal.css'

type ModalProps = {children: ReactNode, title: string}

export const useModal = () => {
  const modal = useRef<HTMLDivElement | null>(null)

  const Modal = ({ children, title }: ModalProps) => {
    const onKeydown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        onClose()
      }
    }

    const onClose = () => {
      modal.current!.className = 'modal hide'
    }

    useEffect(() => {
      document.addEventListener('keydown', onKeydown)
      return () => document.removeEventListener('keydown', onKeydown)
    }, [])

    return (
      <div className='modal hide' ref={modal} onClick={onClose}>
        <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h3 className='modal-title'>{title}</h3>
            <span className='modal-close' onClick={onClose}>
              &times;
            </span>
          </div>
          <div className='modal-body'>
            <div className='modal-content'>{children}</div>
          </div>
          <div className='modal-footer'>footer</div>
        </div>
      </div>
    )
  }

  const showModal = () => {
    setTimeout(() => (modal.current!.className = 'modal'), 0)
  }

  return [Modal, showModal]
}
