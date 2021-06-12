import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mashiro.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article id="site">
        <h1 id="logo" className={styles.logo}>
          <a href="./">mashiro.org</a>
        </h1>
        <section>
          <h3>About me</h3>
          <dl>
            <dt>Name</dt>
            <dd>mashiro</dd>
            <dt>Mail</dt>
            <dd>mail at mashiro.org</dd>
          </dl>
        </section>
        <section>
          <h3>SNS</h3>
          <ul>
            <li>
              <a href="https://twitter.com/mashiro">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/mashiro">GitHub</a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  )
}
