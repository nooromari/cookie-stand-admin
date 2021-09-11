import React, { useEffect } from 'react'
import Image from 'next/image'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
import {fetchStands} from './api/api_get_post'


export default function Home() {
  const [cookieStands, setCookieStands] = React.useState([]);
  const [isLogin, setIsLogin] = React.useState(false)
  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
      username : e.target.username.value ,
      password : e.target.password.value,
    };
    getData(loginInfo)
  }
  
  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
    const t = localStorage.getItem("user")
    if (t){
      setIsLogin(true)
    }
  }

  if (isLogin){
  return (
    <CookieStandAdmin cookieStands={cookieStands} setCookieStands={setCookieStands} />
  )}else{
    return(
      <LoginForm saveInfo ={saveInfo} />
    )
  }
}
