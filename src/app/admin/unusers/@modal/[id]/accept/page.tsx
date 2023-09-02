'use client'
import { $acceptUserRegistration } from '@/actions/acceptRegistration'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from './styles.module.css'

export default function AcceptRegistrationModal({ params: { id } }: { params: { id: number } }) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Modal>
      <h2>Принять заявку</h2>
      <p>Вы можете ввести сообщение (комментарий) для пользователя в поле ниже</p>
      <label htmlFor='comment'>Комментарий</label>
      <input ref={inputRef} type='text' name='comment' id='comment' placeholder='Категории, выбранные вами при регистрации, будут добавлены вам в ближайшее время' />
      <p>После клика по кнопке "Добавить" аккаунт станет активным, а пользователь получит для него пароль.</p>
      <button
        onClick={() => {
          $acceptUserRegistration(id, inputRef.current?.value)
        }}
      >
        Добавить
      </button>
    </Modal>
  )
}
