import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Developer list | Homepage</title>
      <meta name="description" content="developers list"/>
    </Head>

    <div className={styles.title}>
      <h1 className={styles.text}>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum, quis sed tempora doloremque neque, facilis iusto a accusamus ab culpa soluta architecto at tempore incidunt inventore aliquam! Laboriosam, eligendi!</p>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum, quis sed tempora doloremque neque, facilis iusto a accusamus ab culpa soluta architecto at tempore incidunt inventore aliquam! Laboriosam, eligendi!</p>

      <div>
        <Link href="/developers">
          <a className={styles.btn}>See Developer Listing</a>          
        </Link>
      </div>
    </div>
    </>
  )
}
