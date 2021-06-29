import React, { useEffect } from 'react';
import styles from '../styles/Home.module.css'


function Main(){

    // const [stand, setStand] = React.useState({
    //     location : 'irbid',
    //     min : 0,
    //     max : 0,
    //     avg : 0
    
    // })
    const [location, setLocation] = React.useState('Irbid')
    const [min, setMin] = React.useState(0)
    const [max, setMax] = React.useState(0)
    const [avg, setAvg] = React.useState(0)

    

    return(
        <main className={styles.main}>
            <h2>Create Cookie Stand</h2>
        <form>
            <label>Location</label>
            <input placeholder={location}  type="text" title = 'location' onChange={event=>setLocation(event.target.value)}/> <br/>
            <label>Minimum Customer per Hour</label>
            <input placeholder={min} name="min" type="number" title = 'min' onChange={event=>setMin(event.target.value)} />
            <label>Maximum Customer per Hour</label>
            <input placeholder={max} name="max" type="number" title = 'max' onChange={event=>setMax(event.target.value)} />
            <label>Average Cookies per Sale </label>
            <input placeholder={avg} name="avg" type="number" title = 'avg' onChange={event=>setAvg(event.target.value)} />
            <button  
            onClick={event=>{
                event.preventDefault()
                // console.log(event.target.value)
                // setStand({
                //     location :event.target.location,
                //     min :event.target.min,
                //     max :event.target.max,
                //     avg :event.target.avg
                // }) 
                // console.log(stand)
            }} 
            >Create</button>
        </form>
        <p>Report Table Coming Soon... </p>
        {/* <textarea placeholder={stand}></textarea> */}
        <p><span>location : {location}</span>,
        <span>min : {min}</span>,
        <span>max : {max}</span>,
        <span>avg : {avg}</span>
        </p>

      </main>
    )
}

export default Main;
