import styles from './Footer.module.css';

export interface IFooterProps {
  completedTasks: number;
}
/** si stateless component alors tu peux retourner direct sans structures de return
 * c'est plus digeste
 */
export const Footer = ({ completedTasks }: IFooterProps) =>
  completedTasks && completedTasks > 0 ? (
    <footer>
      <code className={styles.footer}>{completedTasks} taches terminées</code>
    </footer>
  ) : (
    <></>
  );

export default Footer;
