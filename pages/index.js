import React, { useEffect } from 'react'
import Image from 'next/image'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
const base_url = 'https://noor-cookie-stand.herokuapp.com/'

export default function Home() {

  const [cookieStands, setCookieStands] = React.useState([]);

  const effect =() =>{
    async function fetchStands(){
      const tokenRes = await axios.post(`${base_url}api/token/`, {
        username : 'noor',
        password : '1234@noor',
      });
        // console.log(tokenRes.data.access);
      const {refresh, access} = tokenRes.data;
      
      const config = {
        headers :{
          Authorization : `Bearer ${access}`
        }
      };
      const res = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
      // console.log(res.data);
      setCookieStands(res.data)
    }
    fetchStands()
  }

  useEffect(effect,[])
  console.log(cookieStands.length);
  if (cookieStands.length){
  
  return (
    <CookieStandAdmin cookieStands={cookieStands} />
  )}else{
    return(
      <LoginForm />
    )
  }
}
