import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Stand from './Stand';


function Main(){

    const [stand, setStand] = React.useState({
        location : 'new location..',
        min : 0,
        max : 0,
        avg : 0,
        condition : false
    
    })

    const handelSubmit = (e) =>{
        e.preventDefault()
                console.log(e.target.location.value)
                setStand({
                    location :e.target.location.value,
                    min :e.target.min.value,
                    max :e.target.max.value,
                    avg :e.target.avg.value,
                    condition : true
                }) 
                console.log(stand)
    }

    return(
        <main className={styles.main}>
            <h2>Create Cookie Stand</h2>
           
        <form onSubmit={handelSubmit} >
            <label className="bg-red-200 text-blue">Location</label>
            <input placeholder={stand.location}  type="text" id = 'location' /> <br/>
            <label>Minimum Customer per Hour</label>
            <input placeholder={stand.min} name="min" type="number" id = 'min' />
            <label>Maximum Customer per Hour</label>
            <input placeholder={stand.max} name="max" type="number" id = 'max' />
            <label>Average Cookies per Sale </label>
            <input placeholder={stand.avg} name="avg" type="number" id = 'avg' />
            <button type='submit' >Create</button>
        </form>
            {console.log(stand)}
        <p>Report Table Coming Soon... </p>
        <Stand stand={stand} />
      </main>
    )
}

export default Main;
