'use client'
import { Task } from '@/types/task'
import { useEffect, useState } from 'react'
import { TaskCard } from './card'
import { useInView } from 'react-intersection-observer'
import styles from './cardPlaceholder.module.css'
import { Category } from '@/types/category'

type Data = { tasks: Task[]; nextPage: number | null }

export const CardPlaceholder = ({
  origin,
  category,
  loadMore,
}: {
  origin: string, 
  category: Category
  loadMore: (category: Category, nextPage: number) => Promise<Data>
}) => {
  const [data, setData] = useState<Data>({ tasks: [], nextPage: 1 })
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView && data.nextPage) {
      loadMore(category, data.nextPage).then((newData) => {
        if (newData.tasks) {
          typeof data.tasks
          setData(
            (prev: Data): Data => ({
              tasks: [...prev.tasks, ...newData.tasks],
              nextPage: newData.nextPage,
            }),
          )
        } else {
          throw newData
        }
      })
    }
  }, [inView, data])
  return (
    <>
      <div className={styles.grid}>
        {data.tasks.map((task: Task) => (
          <TaskCard origin={origin} data={task} key={task.id} />
        ))}
      </div>
      {data.nextPage && (
        <div className='loader-container' ref={ref}>
          Loading... {inView}
        </div>
      )}
    </>
  )
}
