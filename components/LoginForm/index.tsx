import Link from "next/link";
import { useState } from "react";
import Button from '../Button';
import Input from '../Input'

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';

import {
  Container,
  WrapInput,
  Access,
  SignUp,
  Google,

} from './style'

export default function LoginForm() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);

      }).catch((error) => {
        console.log(error);
      });
  }


  return (
      <Container>
        <form>
          <WrapInput> 
              <Input
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={'Email.holt@example.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> 
          </WrapInput>

          <WrapInput>
              <Input 
              type={"password"}  
              name={"password" }
              label={"Password"}
              placeholder={'••••••••'} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              /> 

          </WrapInput>

          <Access>
            <Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}> Login </Button>
            <Button onClick={signInWithGoogle}><Google/>&nbsp;Login with Google</Button>

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