import Image from 'next/image'
import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'

import {
  BodyLogin,
  SideImage,
  Logo,
  FormLogin
} from '../styles/Login'

export default function SignUp() {
  return (
    
    <>
      <Head>
        <title>Cadastro | TradeNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SideImage>
        <Image
        src="/images/planilha.svg"
        alt="planilha"
        width="718"
        height="488"/>
      </SideImage>

      <BodyLogin>
        <Logo>
          <Image
          src="/images/logo.svg"
          alt="logo"
          width="32"
          height="32"/>

          <p>Trade Next</p>
        </Logo>

        <FormLogin>
          <h1>Crie sua conta</h1>

          <SignUpForm/>

        </FormLogin>

      </BodyLogin>
      </>
  )
}