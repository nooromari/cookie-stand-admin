import styles from '../styles/Home.module.css'


function Footer({locationsNumber}){
    return(
        // className={styles.footer}
        <footer className='bg-green-400 w-full p-3' >
            <p className=' ml-4' > {locationsNumber} Locations World Wide </p>
      </footer>
    )
}

export default Footer;