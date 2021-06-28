import React from 'react';
import styles from '../styles/Home.module.css'


function Main(){

    // const [location, min, max, avg, stand] = React.useState()

    // const handleclick = (e) =>{
    //     e.preventDefault();
    //     location = e.target.location
    //     min = e.target.min
    //     max = e.target.max
    //     avg = e.target.avg
    // }
    

    return(
        <main className={styles.main}>
            <h2>Create Cookie Stand</h2>
        <form>
            <label>Location</label>
            <input name="location" type="text" value={location} /> <br/>
            <label>Minimum Customer per Hour</label>
            <input name="min" type="text" value={min} />
            <label>Maximum Customer per Hour</label>
            <input name="max" type="text" value={max} />
            <label>Average Cookies per Sale </label>
            <input name="avg" type="text" value={avg} />
            <button type='submit' >Create</button>
        </form>

      </main>
    )
}

export default Main;

/* <p className={styles.description}>
Get started by editing{' '}
<code className={styles.code}>pages/index.js</code>
</p>

<div className={styles.grid}>
<a href="https://nextjs.org/docs" className={styles.card}>
  <h2>Documentation &rarr;</h2>
  <p>Find in-depth information about Next.js features and API.</p>
</a>

<a href="https://nextjs.org/learn" className={styles.card}>
  <h2>Learn &rarr;</h2>
  <p>Learn about Next.js in an interactive course with quizzes!</p>
</a>

<a
  href="https://github.com/vercel/next.js/tree/master/examples"
  className={styles.card}
>
  <h2>Examples &rarr;</h2>
  <p>Discover and deploy boilerplate example Next.js projects.</p>
</a>

<a
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  className={styles.card}
>
  <h2>Deploy &rarr;</h2>
  <p>
    Instantly deploy your Next.js site to a public URL with Vercel.
  </p>
</a>
</div> */
