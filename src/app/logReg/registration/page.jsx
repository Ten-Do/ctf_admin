'use client'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import { useRef } from 'react'
import { $register } from '@/actions/register'
import { category } from '@/utils/arrays/category'
import { Checkboxes } from '@/components/server/checkboxes/checkboxes'
import { PATHS } from '@/urls'
const Registration = () => {
  let fileChange = () => {
    console.log(document.getElementById('file-input').files[0])
    if (document.getElementById('file-input').files[0]) {
      fileNameRef.current.innerHTML = document.getElementById('file-input').files[0].name
    } else {
      fileNameRef.current.innerHTML = 'Студенческий билет'
    }
  }

  let fileRef = useRef(null)
  let fileNameRef = useRef(null)

  return (
    <div className={styles.form_container}>
      <h2>Регистрация</h2>
      <form className={styles.form} name='forma' action={$register}>
        <div className='input-container'>
          <input id='email' type='email' name='email' required size='40' placeholder=' ' />
          <label htmlFor='email'>Email</label>
        </div>

        <div className='input-container'>
          <input id='name' type='text' required size='40' name='name' placeholder=' ' />
          <label htmlFor='name'>Имя</label>
        </div>

        <div className='input-container'>
          <input id='surname' type='text' required size='40' name='surname' placeholder=' ' />
          <label htmlFor='surname'>Фамилия</label>
        </div>

        <div className='input-container'>
          <input id='nickname' type='text' required size='40' name='nickname' placeholder=' ' />
          <label htmlFor='nickname'>NickName</label>
        </div>

        <div>
          <Checkboxes options={category}>Выбор категорий</Checkboxes>
        </div>

        <div className={styles.file_input_container}>
          <input
            ref={fileRef}
            onChange={fileChange}
            id='file-input'
            className={styles.file_input}
            type='file'
            name='studentCard'
            accept='image/*'
          />
          <label className={styles.form_label_file + ' ' + styles.reg_file_input} htmlFor='file-input'>
            <span ref={fileNameRef}>Студенческий билет</span>
            <div className={styles.stud_logo_container}>
              <div className='svg_container'>
                <Image
                  className={styles.stud_bilet_logo}
                  src='/assets/ui/add.svg'
                  alt='добавить'
                  width={37}
                  height={37}
                />
              </div>
            </div>
          </label>
        </div>
        <button className='btn accent' type='submit'>
          Зарегистрироваться
        </button>
      </form>
      <Link href={PATHS.login} className='btn accent'>
        Уже есть аккаунт
      </Link>
    </div>
  )
}

export default Registration
