'use client'
import { $deleteUser } from '@/actions/deleteUser'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from '@/app/admin/modal.module.css'

export default function UserAbout({ params: { id, nickname } }: { params: { id: number; nickname: string } }) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Modal>
      <h2>Вы действительно хотите удалить пользователя?</h2>
      <p>
        Введите <span className='code'>{nickname}</span> (ник пользователя) в поле ниже, чтобы подтвердить удаление.
        Убедитесь в том, что вы удаляете именно того, кого хотите удалить
      </p>
      <div className='input-container'>
        <input ref={inputRef} type='text' name='nickname' id='nickname' placeholder=' ' />
        <label htmlFor='nickname'> Введите ник</label>
      </div>
      <div className={styles.button_container}>
        <button
        className='btn danger'
          onClick={() => {
            if (inputRef.current?.value === nickname) {
              $deleteUser(id)
            } else {
              inputRef.current?.classList.add('error')
            }
          }}
        >
          Удалить
        </button>
        <p className='subtext'>После нажатия на кнопку "Удалить" пользователь будет удален без возможности восстановления.</p>
      </div>
    </Modal>
  )
}
