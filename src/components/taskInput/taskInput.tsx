import { useState } from 'react'
import styles from './taskInput.module.css'

export interface ITaskInputProps {
  addNewTask: (title: string) => void
}

export const TaskInput = ({ addNewTask }: ITaskInputProps) => {
  const [taskTitle, setTaskTitle] = useState<string>('')

  const handleinputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addNewTask(taskTitle)
    setTaskTitle('')
  }

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter nouvelle tache</h2>
      <form className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder="Tache"
          value={taskTitle}
          onChange={handleinputChangeEvent}
        />
        <button className="button-primary" onClick={handleSubmit} type="submit">
          Ajouter
        </button>
      </form>
    </div>
  )
}

export default TaskInput
