import Link from "next/link";
import { useState } from "react";
import Button from '../Button';
import Input from '../Input'

import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import { signInWithPopup, GoogleAuthProvider ,signInWithEmailAndPassword,getAuth} from "firebase/auth";
import { auth } from '../../services/firebase';

import {
  Container,
  WrapInput,
  Access,
  SignUp,
  Google,

} from './style'

export default function LoginForm() {

  const schema =  yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register , handleSubmit: onSubmit , formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  const [user, setUser] = useState({});

  function loginInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);

      }).catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = async (data) =>{
    const auth = getAuth();
    await signInWithEmailAndPassword(auth ,data.email, data.password).then(singedUser => {
      console.log(singedUser)
      console.log("logado com sucesso")
    }).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, " - ", errorMessage)
    })
  }


  return (
      <Container>
        <form onSubmit={onSubmit(handleSubmit)}>
          <WrapInput> 
              <Input
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={'Email.holt@example.com'}
                onChange={(e) => setEmail(e.target.value)}
               register={register}   
               error={errors.email?.message}
            /> 
          </WrapInput>

          <WrapInput>
              <Input 
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"••••••••"}
                onChange={(e) => setPassword(e.target.value)}
                register={register}
                error={errors.password?.message}             
            /> 

          </WrapInput>

          <Access>
            <Button type="submit" backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}> Login </Button>
            <Button type="button" onClick={loginInWithGoogle}><Google/>&nbsp;Login with Google</Button>

            <SignUp>
              <span>Não possui conta?&nbsp;</span>
              <Link href="/signUp">
                  Sign up
              </Link>
            </SignUp>
          </Access>

        </form>
      </Container>
  )
    
  }