import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CookieStandAdmin from '../components/CookieStandAdmin'
import React from 'react'


export default function Home() {
  
  const [path,setPath] = React.useState("/overview")
  const [page,setPage] = React.useState("overview")
  return (
    <CookieStandAdmin path={path} page={page} />
  )
}
