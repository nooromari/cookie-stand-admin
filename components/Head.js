import React from "react";
import Head from 'next/head';



function Head1(props){
    return(
        <Head>
        <title>{props.title}</title>
      </Head>
    )
}

export default Head1;