import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import ReportTable from './ReportTable';
import CreateForm from './CreateForm';

function Main(){

    const [stand, setStand] = React.useState({
        location : 'new location..',
        min : 0,
        max : 0,
        avg : 0,
        condition : false
    
    })

    const onCreate = (e) =>{
        e.preventDefault()
                setStand({
                    location :e.target.location.value,
                    min :e.target.min.value,
                    max :e.target.max.value,
                    avg :e.target.avg.value,
                    condition : true
                }) 
    }

    return(
        <main className={styles.main}>
           
            <CreateForm onCreate={onCreate} stand={stand}/>
            
            <ReportTable stand={stand} />
      </main>
    )
}

export default Main;
