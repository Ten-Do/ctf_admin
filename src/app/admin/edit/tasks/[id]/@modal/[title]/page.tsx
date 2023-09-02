'use client'
import { $deleteTask } from '@/actions/deleteTask'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from './styles.module.css'

export default function DelTaskModal({ params: { id, title } }: { params: { id: number; title: string } }) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Modal>
      <h2>Вы действительно хотите удалить задачу?</h2>
      <p>
        Введите <span className='code'>{title}</span> (название задачи) в поле ниже, чтобы подтвердить удаление.
        Убедитесь в том, что вы удаляете именно то, что хотите удалить
      </p>
      <label htmlFor='title'> Введите название задачи</label>
      <input ref={inputRef} type='text' name='title' id='title' placeholder='Title' />
      <p>После нажатия на кнопку "Удалить" задача будет удален без возможности восстановления.</p>
      <button
        onClick={() => {
          if (inputRef.current?.value === title) {
            $deleteTask(id)
          } else {
            inputRef.current?.classList.add(styles.error)
          }
        }}
      >
        Удалить
      </button>
    </Modal>
  )
}
