import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head1 from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head1 title='Cookie Stand Admin' />

      <Header />

      <Main />
      
      <Footer/>
    </div>
  )
}
