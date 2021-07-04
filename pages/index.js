import React, { useEffect } from 'react'
import Image from 'next/image'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
const base_url = 'https://noor-cookie-stand.herokuapp.com/'

export default function Home() {
  const [cookieStands, setCookieStands] = React.useState([]);
  const [isLogin, setIsLogin] = React.useState(false)
  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
        username : e.target.username.value ,
        password : e.target.password.value,
      };
      // console.log(loginInfo);
      getData(loginInfo)
    }

  async function login(loginInfo) {
    return axios.post(`${base_url}api/token/`, loginInfo);
  }

  async function fetchStands(loginInfo) {
    try{
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
    setIsLogin(true)
    return response.data;
  }catch(error){
    alert('Wrong username or password')
  }
    
  }

  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
  }

  // console.log(cookieStands.length);
  if (isLogin){
  
  return (
    <CookieStandAdmin cookieStands={cookieStands} setCookieStands={setCookieStands} />
  )}else{
    return(
      <LoginForm saveInfo ={saveInfo} />
    )
  }
}
