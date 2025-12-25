import { useState } from 'react';
import { Box } from '../atoms/Box/Box';
import { Button } from '../atoms/Button/Button';
import { Input } from '../atoms/Input/Input';
import styles from './taskInput.module.css';

export interface ITaskInputProps {
  addNewTask: (title: string) => void;
}

export const TaskInput = ({ addNewTask }: ITaskInputProps) => {
  const [taskTitle, setTaskTitle] = useState<string>('');

  const handleinputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // j'aime bien ici me prémunir des potentiels undefined.
    // ça ne sera pratiquement jamais le cas ici sauf: le jour ou cette fonction >
    // deviens polymorphe et servira plusieurs d'inputs type différents.
    // du coup je préfère avoir toujours ce réflexe.
    // e?.preventDefault();    ? nullish operator me préserve de e === undefined et ?.(); de préserve de preventDefault === undefined
    e?.preventDefault?.();
    addNewTask(taskTitle);
    setTaskTitle('');
  };

  return (
    <Box className={styles.element}>
      <h2 className={styles.title}>Ajouter nouvelle tache</h2>
      <form className={styles.container}>
        <Input
          type='text'
          placeholder='Tache'
          value={taskTitle}
          onChange={handleinputChangeEvent}
        />
        <Button variant='primary' onClick={handleSubmit} type='submit'>
          Ajouter
        </Button>
      </form>
    </Box>
  );
};

export default TaskInput;
