import axios from 'axios'

const base_url = 'https://noor-cookie-stand.herokuapp.com/'

async function login(loginInfo) {
    return axios.post(`${base_url}api/token/`, loginInfo);
  }

export async function fetchStands(loginInfo) {
    try{
    const tokenResponse = await login(loginInfo)
    const { refresh, access: token } = tokenResponse.data;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    localStorage.setItem('user', token)
    // console.log(tokenResponse.data)
    const response = await axios.get(`${base_url}api/v1/cookie_stands/`, config);
    return response.data;
  }catch(error){
    alert('Wrong username or password')
  }
    
  }

  export async function postData(data) {
      try {
        const token = localStorage.getItem("user");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
          const response = await axios.post(`${base_url}api/v1/cookie_stands/`, data, config);
      } catch (error) {
          console.log(error)
      }
  }

