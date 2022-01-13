import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/react';
import styles from './styles.module.scss';

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button className={styles.signInButton}>
      <FaGithub color='#04d361' />
      {session.user.name}
      <FiX
        color='#73738b'
        className={styles.rightIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color='#eba427' />
      Sign In With Github
    </button>
  );
}
