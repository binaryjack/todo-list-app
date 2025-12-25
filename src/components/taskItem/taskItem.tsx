import styles from './TaskItem.module.css'

interface ITask {
  id: number
  title: string
  completed: boolean
}

export interface ITaskItemProps {
  task: ITask
  updateTaskStatus: (id: number, completedValue: boolean) => void
  deleteTask: (id: number) => void
  completed: boolean
}

export const TaskItem = ({ task, updateTaskStatus, deleteTask, completed }: ITaskItemProps) => {
  return (
    <li
      onClick={() => updateTaskStatus(task.id, !completed)}
      className={`${styles.container} ${task.completed ? styles.success : styles.default}`}>
      <div className={styles.item}>
        <div className={`${styles.id} ${task.completed ? styles.success : styles.idDefault}`}>{task.id}</div>
        <div className={task.completed ? styles.contentSuccess : styles.contentDefault}>{task.title}</div>
      </div>
      <button
        onClick={(event) => {
          event.stopPropagation()
          deleteTask(task.id)
        }}
        className="button-primary">
        X
      </button>
    </li>
  )
}

export default TaskItem
