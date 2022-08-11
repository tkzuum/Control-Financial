import { useState } from "react";
import Button from '../Button';
import Input from '../Input'

import {
  Container,
  WrapInput,
  Access,
  SignUp,
  Google,
  Eyes,
  Eyes2
} from './style'

export default function LoginForm() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



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
            <Button><Google/>&nbsp;Login with Google</Button>

            <SignUp>
              <span>Não possui conta?&nbsp;</span>
              <a href="/signUp">
                  Sign up
              </a>
            </SignUp>
          </Access>

        </form>
      </Container>
  )
    
  }