import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo aqui</strong>
            <p>
              fhadsdfhjkldsahfljikshfueiqwyh fiohafhdskaj flsahfsa dfiudbsfads
              fo8ads fjsdaf dsfhais
            </p>
          </a>

          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo aqui</strong>
            <p>
              fhadsdfhjkldsahfljikshfueiqwyh fiohafhdskaj flsahfsa dfiudbsfads
              fo8ads fjsdaf dsfhais
            </p>
          </a>

          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Titulo aqui</strong>
            <p>
              fhadsdfhjkldsahfljikshfueiqwyh fiohafhdskaj flsahfsa dfiudbsfads
              fo8ads fjsdaf dsfhais
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
