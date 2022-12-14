import Image from 'next/image'
import Head from 'next/head'
import LoginForm from '../components/LoginForm'

import {
  BodyLogin,
  SideImage,
  Logo,
  FormLogin,
  Body
} from '../styles/Login'

export default function Login() {
  return (
    <Body>
      <Head>
        <title>Login | TradeNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SideImage>
        <Image
          src="/images/planilha.svg"
          alt="planilha"
          width="718"
          height="488" />
      </SideImage>

      <FormLogin>
        <Logo>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="32"
            height="32" />

          <p>Trade Next</p>
        </Logo>

        <h1>Trade Access</h1>
        <p>Por favor, preencha seus dados para acessar sua conta.</p>

        <LoginForm />

      </FormLogin>


    </Body>
  )
}