import { TaskService } from '@/services/taskService'
import { Task } from '@/types/task'
import Actions from './actions'
import styles from './styles.module.css'

export default async function TaskInfo({ params: { id } }: { params: { id: number } }) {
  const task: Task = await TaskService.getOne(id)
  return (
    <>
        <div className={styles.head}>
          <div className={styles.title}>{task.title}</div>
          <div className={styles.additional}>
            <p>
              category: <span>{task.category}</span>
            </p>
            <p>
              difficulty: <span>{task.difficulty}</span>
            </p>
            <p>
              points: <span>{task.points}</span>
            </p>
          </div>
        </div>
        <p className={styles.description}>
          {task.description}
        </p>
        <Actions task_file_name={task.task_file as string} taskId={id}/>
    </>
  )
}
