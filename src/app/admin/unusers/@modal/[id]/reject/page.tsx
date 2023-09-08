'use client'
import { $rejectUserRegistration } from '@/actions/rejectRegistration'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from '@/app/admin/modal.module.css'

export default function RejectRegistrationModal({ params: { id } }: { params: { id: number } }) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  return (
    <Modal>
      <h2>Отклонить заявку?</h2>
      <p>В поле ниже укажите причину, по которой аккаунт не может быть добавлен на платформу.</p>
      <div className='input-container'>
        <textarea className={styles.comment} ref={inputRef} name='comment' id='comment' placeholder=' ' rows={3} />
        <label htmlFor='comment'>Причина</label>
      </div>
      <div className={styles.button_container}>
        <button
          className='btn danger'
          onClick={() => {
            if (!inputRef.current?.value) {
              inputRef.current?.classList.add('error')
            } else {
              $rejectUserRegistration(id, inputRef.current.value)
            }
          }}
        >
          Отклонить
        </button>
        <p className='subtext'>
          После клика по кнопке "Отклонить" пользователь получит ваше сообщение. Аккаунт будет удален.
        </p>
      </div>
    </Modal>
  )
}
