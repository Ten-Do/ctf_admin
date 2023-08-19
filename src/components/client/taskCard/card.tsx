import { Task } from '@/types/task'
import Link from 'next/link'
import styles from './card.module.css'

type TaskCardProps = {
  origin: string
  data: Task
}

export const TaskCard = ({origin, data: { id, title, category, points, difficulty, description } }: TaskCardProps) => {
  return (
    <Link href={`/${origin}/${category}/${id}`} className={styles.card} target='_blank'>
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
