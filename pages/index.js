import React, { useEffect } from 'react'
import Image from 'next/image'
import CookieStandAdmin from '../components/CookieStandAdmin'
import LoginForm from '../components/LoginForm'
import axios from 'axios'
const base_url = 'https://noor-cookie-stand.herokuapp.com/'

export default function Home() {
  const [cookieStands, setCookieStands] = React.useState([]);
  // const [loginInfo, setLoginInfo] = React.useState({})

  
  async function saveInfo(e){
    e.preventDefault();
    const loginInfo = {
        username : e.target.username.value ,
        password : e.target.password.value,
      };
      console.log(loginInfo);
      // await fetchStands(loginInfo)
      getData(loginInfo)
    }

  async function login(loginInfo) {
    return axios.post(`${base_url}api/token/`, loginInfo);
  }

  async function fetchStands(loginInfo) {
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const response = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
    console.log(response.data[0]+'yes');
    return response.data;
  }

  async function getData(loginInfo) {
    setCookieStands(await fetchStands(loginInfo));
  }
  
  // React.useEffect(() => {
    
  //   // getData()

  // })


  console.log(cookieStands.length);
  if (cookieStands.length){
  
  return (
    <CookieStandAdmin cookieStands={cookieStands} setCookieStands={setCookieStands} />
  )}else{
    return(
      <LoginForm saveInfo ={saveInfo} />
    )
  }
}
