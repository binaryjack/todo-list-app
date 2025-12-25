import reactLogo from '../../assets/react.svg';
import { Text } from '../atoms/Text/Text';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} width={50} height={50} alt='React logo' />
        <div>
          <h1>Liste des taches</h1>
          <Text as='code' color='gray'>
            Gérez vos taches
          </Text>
        </div>
      </div>
      <code className='color-primary'></code>
    </div>
  );
};

export default Header;
