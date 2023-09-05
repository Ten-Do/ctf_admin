'use client'
import { $rejectUserRegistration } from '@/actions/rejectRegistration'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from './styles.module.css'

export default function RejectRegistrationModal({ params: { id } }: { params: { id: number } }) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Modal>
      <div className={styles.reject_container}>
      <h2>Отклонить заявку?</h2>
      <p>В поле ниже укажите причину, по которой аккаунт не может быть добавлен на платформу.</p>
      <label htmlFor='comment'>Причина</label>
      <input ref={inputRef} type='text' name='comment' id='comment' placeholder='Документы паленые' />
      <p>После клика по кнопке "Отклонить" пользователь получит ваше сообщение. Аккаунт будет удален.</p>
      <button
        onClick={() => {
          if (!inputRef.current?.value) {
            inputRef.current?.classList.add(styles.error)
          } else {
            $rejectUserRegistration(id, inputRef.current.value)
          }
        }}
      >
        Отклонить
      </button>
      </div>
      
    </Modal>
  )
}
