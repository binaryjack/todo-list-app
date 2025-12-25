import { useState } from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { TaskInput } from '../components/taskInput/taskInput';
import { TaskList } from '../components/taskList/taskList';

interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addNewTask = (title: string) => {
    const newTask: ITask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const updateTaskStatus = (id: number, completedValue: boolean) => {
    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: completedValue };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const deleteTask = (id: number) => {
    console.log('deleteTask id :', id);
    const filteredTasks = taskList.filter(task => task.id !== id);
    setTaskList(filteredTasks);
  };

  const completedTasks = taskList.filter(t => t.completed).length;
  const incompletedTasks = taskList.length - completedTasks;

  return (
    <>
      <Header />
      <main>
        <TaskInput addNewTask={addNewTask} />
        <TaskList
          taskList={taskList}
          incompletedTasks={incompletedTasks}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      </main>
      <Footer completedTasks={completedTasks} />
    </>
  );
};

export default TaskContainer;
