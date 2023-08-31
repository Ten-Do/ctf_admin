'use client'
import { TaskService } from '@/services/taskService'
import styles from './styles.module.css'

export default function Actions({ task_file_name }: { task_file_name: string }) {
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.file}>
          <button className={styles.file_btn} onClick={() => TaskService.downloadTaskFile(task_file_name)}>
            {task_file_name}
          </button>
        </div>
        <div className={styles.btl__actions}>

          <div>
            <input type='text' placeholder='Flag' className={styles.flag_field + ' code'} />
          </div>
          <button className={styles.submit_btn}>
            Ответить
          </button>
          <button className={styles.answer_button}>
            Сдаться
          </button>
        </div>

        <div className={styles.answer_answers}>
          <div className={styles.answer_container}>
            Lorem ipsum dolor sit amet consecteoi nihil
            adipisci voluptates au
          </div>

          <div className={styles.answer_answer}>123</div>
        </div>


      </div>
    </>
  )
}
