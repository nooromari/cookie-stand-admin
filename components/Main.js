import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import ReportTable from './ReportTable';
import CreateForm from './CreateForm';

function Main({cookieStands, setCookieStands, onCreate}){

    return(
        <main className={styles.main}>
           
            <CreateForm onCreate={onCreate}/>
            
            <ReportTable cookieStands={cookieStands} />
      </main>
    )
}

export default Main;
