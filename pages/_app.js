import '../styles/gereric/reset.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="/images/logo.ico" />
            <title>TradeNext</title>
        </Head>
  
         <Component {...pageProps} />  
        
        
  </>
}

export default MyApp
