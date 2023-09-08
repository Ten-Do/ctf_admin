'use client'
import { $checkAnswer } from '@/actions/checkAnswer'
import { $getAnswer } from '@/actions/getAnswer'
import { TaskService } from '@/services/taskService'
import { showSnackbar } from '@/utils/feedback/snackbar'
import { useRef, useState } from 'react'
import styles from './styles.module.css'

export default function Actions({ task_file_name, taskId }: { task_file_name: string; taskId: number }) {
  const answerRef = useRef<HTMLInputElement>(null)
  const [solution, setSolution] = useState('')
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.file}>
          <button className='btn accent' onClick={() => TaskService.downloadTaskFile(task_file_name)}>
            {task_file_name}
          </button>
        </div>
        <div className='input-container'>
          <input ref={answerRef} name='answer' id='answer' type='text' placeholder=' ' />
          <label htmlFor='answer'>flag</label>
        </div>
        <button
          className='btn access'
          onClick={() => $checkAnswer(taskId, answerRef.current!.value).then((message) => showSnackbar(message))}
        >
          Ответить
        </button>
        <button
          className='btn danger'
          onClick={() => $getAnswer(taskId).then(({ data: { solution } }) => setSolution(solution))}
        >
          Сдаться
        </button>
      </div>
      {solution && (
        <div className={styles.solution}>
          <h2>Решение</h2>
          <p>{solution}</p>
        </div>
      )}
    </>
  )
}
