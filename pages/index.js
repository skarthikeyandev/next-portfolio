import Head from 'next/head'
import Profile from './home'
import About from './above'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Karthikeyan Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <Profile/>
    </div>
  )
}
