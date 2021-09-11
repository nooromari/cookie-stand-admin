import Head1 from './Head'
import CookieStandHeader from './CookieStandHeader'
import Footer from './Footer'
import Main from './Main'
import React, { useEffect, useState } from 'react'
import { postData } from '../pages/api/api_get_post'


function CookieStandAdmin(props){

  // const [cookieStands, setCookieStands] = React.useState([]);
  const [open_hours, setopen] = React.useState([6,7,8,9,10,11,12,1,2,3,4,5,6,7]);

  const [hoursTotals, sethoursTotals] = React.useState([]);

  async function onCreate (e) {
      e.preventDefault()
      let new_stand = {
        location :e.target.location.value,
        hourly_sales : open_hours.map(()=> Math.ceil((Math.random() *(e.target.max.value - e.target.min.value +1)) + e.target.min.value)*e.target.avg.value),
        minimum_customers_per_hour: e.target.min.value,
        maximum_customers_per_hour: e.target.max.value,
        average_cookies_per_sale: e.target.avg.value,
        owner: 1
      } 
      await addStand(new_stand)
      props.setCookieStands([...props.cookieStands, new_stand]);
    };
    
  async function addStand (newStand){
    try{
      await postData(newStand, props.loginInfo)
    }catch{
      console.log(error)
    }
    }
    
    React.useEffect(()=> sethoursTotals(open_hours.map((hr,i)=> props.cookieStands.reduce((a,stand )=> a+=stand.hourly_sales[i],0))),[open_hours,props.cookieStands])
    
    return(
      <div >
      <Head1 title='Cookie Stand Admin' />

      <CookieStandHeader path={props.path} page={props.page} />

      <Main cookieStands={props.cookieStands} setCookieStands={props.setCookieStands} onCreate={onCreate} sethoursTotals={sethoursTotals} hoursTotals={hoursTotals} open_hours={open_hours} />
      
      <Footer locationsNumber={props.cookieStands && props.cookieStands.length} />
    </div>
    )
}

export default CookieStandAdmin;