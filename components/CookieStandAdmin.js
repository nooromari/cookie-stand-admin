import Head1 from './Head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React, { useEffect, useState } from 'react'


function CookieStandAdmin(props){

  const [cookieStands, setCookieStands] = React.useState([]);
  const open_hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];

  const [hoursTotals, sethoursTotals] = React.useState([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]);

  const onCreate = (e) =>{
      e.preventDefault()
      setCookieStands([...cookieStands, {
        location :e.target.location.value,
        min :e.target.min.value,
        max :e.target.max.value,
        avg :e.target.avg.value,
        hourly_sales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }])
     
  };

  // React.useEffect(()=> sethoursTotals(open_hours.map((hr,i)=> cookieStands.reduce((a,stand )=> a+=stand.hourly_sales[i],0))),[])

    return(
    <div >
      <Head1 title='Cookie Stand Admin' />

      <Header path={props.path} page={props.page} />

      <Main cookieStands={cookieStands} setCookieStands={setCookieStands} onCreate={onCreate} sethoursTotals={sethoursTotals} hoursTotals={hoursTotals} open_hours={open_hours} />
      
      <Footer locationsNumber={cookieStands.length} />
    </div>
    )
}

export default CookieStandAdmin;