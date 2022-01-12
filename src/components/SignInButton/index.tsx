import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Lucas Lourenço
      <FiX color='#73738b' className={styles.rightIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub color='#eba427' />
      Sign In With Github
    </button>
  );
}
