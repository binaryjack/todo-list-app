import { Box } from '../atoms/Box/Box';
import { TaskItem } from '../taskItem/taskItem';
import styles from './TaskList.module.css';

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITaskListProps {
  taskList: ITask[];
  incompletedTasks: number;
  updateTaskStatus: (id: number, completedValue: boolean) => void;
  deleteTask: (id: number) => void;
}
/** c'est mieux de toujours utiliser des ternaires directement plutôt
 *  que du if then else avec return. */
export const TaskList = ({
  taskList,
  incompletedTasks,
  updateTaskStatus,
  deleteTask,
}: ITaskListProps) =>
  taskList && taskList.length > 0 ? (
    <Box>
      <h2 className={styles.title}>
        {incompletedTasks > 0 && <> Il reste {incompletedTasks} taches a faire</>}
        {incompletedTasks == 0 && <> Toutes les taches sont terminées</>}
      </h2>
      <ul className={styles.container}>
        {taskList.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            completed={task.completed}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </Box>
  ) : (
    <Box>
      <h2 className={styles.title}>Aucune tache disponible</h2>
    </Box>
  );

export default TaskList;
