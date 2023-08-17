import { Task } from '@/types/task'
import Link from 'next/link'
import styles from './card.module.css'

type TaskCardProps = {
  data: Task
}

export const TaskCard = ({ data: { id, title, category, points, difficulty, description } }: TaskCardProps) => {
  return (
    <Link href={`/tasks/${category}/${id}`} className={styles.card} target='_blank'>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
      <div className={styles.info}>
        <div className='code'>{category}</div>
        <div className='code'>{difficulty}</div>
        <div className='code'>{points}</div>
      </div>
    </Link>
  )
}
