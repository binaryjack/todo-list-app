import styles from './Footer.module.css'

export interface IFooterProps {
  completedTasks: number
}

export const Footer = ({ completedTasks }: IFooterProps) => {
  if (completedTasks && completedTasks > 0) {
    return (
      <footer>
        <code className={styles.footer}>{completedTasks} taches terminées</code>
      </footer>
    )
  } else return <></>
}

export default Footer
