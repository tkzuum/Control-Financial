import Head from 'next/head'
import Reset from "../styles/gereric/reset.js"


function MyApp({ Component, pageProps }) {
  return <>
        <Reset/>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" ></link>
            <link rel="shortcut icon" href="/images/logo.ico" />
            <title>TradeNext</title>
        </Head>
  
         <Component {...pageProps} />  
        
        
  </>
}

export default MyApp
