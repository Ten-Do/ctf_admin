'use client'
import { $deleteUser } from '@/actions/deleteUser'
import { Modal } from '@/components/client/modal/modal'
import { useRef } from 'react'
import styles from './styles.module.css'

export default function UserAbout({ params: { id, nickname } }: { params: { id: number; nickname: string } }) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Modal>
      <h2>Вы действительно хотите удалить пользователя?</h2>
      <p>
        Введите <span className='code'>{nickname}</span> (ник пользователя) в поле ниже, чтобы подтвердить удаление.
        Убедитесь в том, что вы удаляете именно того, кого хотите удалить
      </p>
      <label htmlFor='nickname'> Введите ник пользователя</label>
      <input ref={inputRef} type='text' name='nickname' id='nickname' placeholder='NickName' />
      <p>После нажатия на кнопку "Удалить" пользователь будет удален без возможности восстановления.</p>
      <button
        onClick={() => {
          if (inputRef.current?.value === nickname) {
            console.log('del')
            $deleteUser(id)
          } else {
            console.log('not del')

            inputRef.current?.classList.add(styles.error)
          }
        }}
      >
        Удалить
      </button>
    </Modal>
  )
}
