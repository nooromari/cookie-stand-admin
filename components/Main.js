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
           
            <form onSubmit={handelSubmit} className='bg-green-200 p-8 rounded-3xl ' >
                <h2 className='font-medium text-center pb-3 text-xl' >Create Cookie Stand</h2>
                <label className='px-5' >Location</label>
                <input className="w-10/12" placeholder={stand.location}  type="text" id = 'location' /> <br/>
                <div className='grid grid-cols-3 p-3 float-left' >
                    <label className='p-3' >Minimum Customer per Hour</label>
                    <label className='p-3' >Maximum Customer per Hour</label>
                    <label className='p-3' >Average Cookies per Sale </label>
                    
                    <input className=' mx-3' placeholder={stand.min} name="min" type="number" id = 'min' />
                    <input className=' mx-3' placeholder={stand.max} name="max" type="number" id = 'max' />
                    <input className=' mx-3' placeholder={stand.avg} name="avg" type="number" id = 'avg' />
                </div>
                <button className='text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100 ' type='submit' >Create</button>
            </form>
            <p className='m-5 text-gray-600' >Report Table Coming Soon... </p>
            <Stand stand={stand} />
      </main>
    )
}

export default Main;
