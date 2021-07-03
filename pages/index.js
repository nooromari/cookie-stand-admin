import React, { useEffect } from 'react'
import Image from 'next/image'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/CookieStandAdmin'
import axios from 'axios'
const base_url = 'https://noor-cookie-stand.herokuapp.com/'

export default function Home() {

  const effect =() =>{
    async function fetchStands(){
      const tokenRes = await axios.post(`${base_url}api/token/`, {
        username : 'noor',
        password : '1234@noor',
      });
        // console.log(tokenRes.data.access);
      const {refresh, token} = tokenRes.data;
      
      const config = {
        header:{
          Authorization : `Bearer ${token}`
        }
      }
      const res = await axios.get(`${base_url}api/v1/cookie_stands`)
    }
    fetchStands()
  }

  useEffect(effect,[])

  if (true){
  
  return (
    <CookieStandAdmin />
  )}else{
    return(
      <LoginForm />
    )
  }
}
