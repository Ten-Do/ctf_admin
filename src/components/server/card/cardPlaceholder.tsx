import { Task } from '@/types/task'
import { TaskCard } from './card'
import styles from './cardPlaceholder.module.css'

type CardPlaceholderProps = {
  data: Task[]
}

export const CardPlaceholder = ({ data }: CardPlaceholderProps) => {
  return (
    <div className={styles.grid}>
      {data.map(({ solution, task_file, answer, ...taskWithoutAnswer }) => (
        <TaskCard data={taskWithoutAnswer} key={taskWithoutAnswer.id} />
      ))}
    </div>
  )
}
