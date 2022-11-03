import Head from 'next/head'
import Profile from './home'
import styles from '../styles/Home.module.css'
import About from './above'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <Profile/>
    </div>
  )
}