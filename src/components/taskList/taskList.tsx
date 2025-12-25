import { TaskItem } from '../taskItem/taskItem'
import styles from './TaskList.module.css'

interface ITask {
  id: number
  title: string
  completed: boolean
}

export interface ITaskListProps {
  taskList: ITask[]
  incompletedTasks: number
  updateTaskStatus: (id: number, completedValue: boolean) => void
  deleteTask: (id: number) => void
}

export const TaskList = ({ taskList, incompletedTasks, updateTaskStatus, deleteTask }: ITaskListProps) => {
  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && <> Il reste {incompletedTasks} taches a faire</>}
          {incompletedTasks == 0 && <> Toutes les taches sont terminées</>}
        </h2>

        <ul className={styles.container}>
          {taskList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              completed={task.completed}
              updateTaskStatus={updateTaskStatus}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="box">
        <h2 className={styles.title}>Aucune tache disponible</h2>
      </div>
    )
  }
}

export default TaskList
