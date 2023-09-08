'use client'
import { $acceptUserRegistration } from '@/actions/acceptRegistration'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from '@/app/admin/modal.module.css'

export default function AcceptRegistrationModal({ params: { id } }: { params: { id: number } }) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  return (
    <Modal>
      <h2>Принять заявку</h2>
      <p>Вы можете ввести сообщение (комментарий) для пользователя в поле ниже</p>
      <div className='input-container'>
        <textarea className={styles.comment} ref={inputRef} name='comment' id='comment' placeholder=' ' rows={3} />
        <label htmlFor='comment'>Комментарий</label>
      </div>
      <div className={styles.button_container}>
        <button
          className='btn access'
          onClick={() => {
            $acceptUserRegistration(id, inputRef.current?.value)
          }}
        >
          Добавить
        </button>
        <p className='subtext'>
          После клика по кнопке "Добавить" аккаунт станет активным, а пользователь получит для него пароль.
        </p>
      </div>
    </Modal>
  )
}
