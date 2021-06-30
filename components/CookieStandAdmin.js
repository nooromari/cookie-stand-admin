import Head1 from './Head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import React from 'react'


function CookieStandAdmin(){

  const [cookieStands, setCookieStands] = React.useState([]);

  const onCreate = (e) =>{
      e.preventDefault()
      setCookieStands([...cookieStands, {
        location :e.target.location.value,
        min :e.target.min.value,
        max :e.target.max.value,
        avg :e.target.avg.value,
        hourly_sales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }])
      console.log(cookieStands)        
  }

    return(
    <div >
      <Head1 title='Cookie Stand Admin' />

      <Header />

      <Main cookieStands={cookieStands} setCookieStands={setCookieStands} onCreate={onCreate} />
      
      <Footer locationsNumber={cookieStands.length} />
    </div>
    )
}

export default CookieStandAdmin;