'use client'
import { Category } from '@/types/category'
import { difficulty } from '@/utils/arrays/difficulty'
import { Task } from '@/types/task'
import { useRef } from 'react'
import styles from './styles.module.css'
import { SessionProvider, useSession } from 'next-auth/react'
import { showSnackbar } from '@/utils/feedback/snackbar'

type TaskFormProps = {
  submitHandler: (data: any) => Promise<string>
  data?: Task
}

const defaultData: Task = {
  title: '',
  points: 0,
  description: '',
  category: undefined,
  difficulty: undefined,
  answer: '',
  task_file: null,
  solution: null,
}

const Task_Form = ({ data = defaultData, submitHandler }: TaskFormProps) => {
  const taskFileRef = useRef<HTMLAnchorElement>(null),
    solutionFileRef = useRef<HTMLAnchorElement>(null),
    { data: sessionData } = useSession()
  const categories: Category[] = sessionData?.user?.userInfo?.categories || []
  return (
    <div className={styles.form_container}>
      <form
        className={styles.form}
        action={(...params) => submitHandler(...params).then((res) => showSnackbar(res || 'Сделано!'))}
        // onSubmit={(e) =>
        //     e.preventDefault()
        //     const data: Task = Object.fromEntries(new FormData(e.target as HTMLFormElement)) as unknown as Task
        //     submitHandler(data)
        // .then((res) => showSnackbar(res || 'Сделано!'))
        // .catch((err) => {
        //   console.log('ERROR HERE ==>', err)
        //   showSnackbar(err.message || 'Что-то пошло не так(')
        // })
        // }
      >
        <label htmlFor='title'>Название</label>
        <input type='text' id='title' name='title' defaultValue={data.title} required />

        <label htmlFor='points'>Очки</label>
        <input type='number' id='points' name='points' min='30' max='1000' defaultValue={data.points} required />

        <label htmlFor='description'>Описание</label>
        <textarea id='description' name='description' rows={4} defaultValue={data.description} required></textarea>

        <label htmlFor='category'>Категория</label>
        <select id='category' name='category'>
          {categories.map((category) =>
            category === data?.category ? (
              <option value={category} key={category} selected>
                {category}
              </option>
            ) : (
              <option value={category} key={category}>
                {category}
              </option>
            ),
          )}
        </select>

        <label htmlFor='difficulty'>Сложность</label>
        <select id='difficulty' name='difficulty'>
          {difficulty.map((elem) =>
            elem === data?.difficulty ? (
              <option value={elem} key={elem} selected>
                {elem}
              </option>
            ) : (
              <option value={elem} key={elem}>
                {elem}
              </option>
            ),
          )}
        </select>

        <label htmlFor='answer'>Ответ</label>
        <input type='text' id='answer' name='answer' defaultValue={data.answer} required />

        <label htmlFor='task_file'>Файл с заданием</label>
        <input
          type='file'
          id='task_file'
          name='task_file'
          onChange={({ target }) => {
            const file = target.files![0]
            if (taskFileRef.current!.href) URL.revokeObjectURL(taskFileRef.current!.href)
            taskFileRef.current!.href = URL.createObjectURL(file)
            taskFileRef.current!.download = file.name
          }}
        />
        <a ref={taskFileRef} download>
          F I L E
        </a>

        <label htmlFor='solution'>Решение</label>
        <textarea id='solution' name='solution' rows={4} defaultValue={data.description} required></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export const TaskForm = (props: TaskFormProps) => (
  <SessionProvider>
    <Task_Form {...props} />
  </SessionProvider>
)
