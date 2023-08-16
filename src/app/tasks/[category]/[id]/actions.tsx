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
        <div className={styles.bt__actions}>
          <input type='text' placeholder='Flag' className={styles.flag_field + ' code'} />
          <button className={styles.submit_btn}>Ответить</button>
        </div>
      </div>
    </>
  )
}
