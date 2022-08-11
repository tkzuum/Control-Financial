import { useState } from "react";
import { 
    Sign,
    Name,
    Email,
    Password,
    WrapInput,

} from './style'
import Button from '../Button'
import Input from '../Input/index'

export default function SignUpForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <Sign>
        <Name>
            <WrapInput>
                
                <Input type={"text"} name={"nome"} label={"Nome"} placeholder={""}/>
            </WrapInput>

            <WrapInput>
                
                <Input type={"text"} name={"sobrenome"} label={"Sobrenome"} placeholder={""}/>
            </WrapInput>
        </Name>

        <Email>
            
            <Input
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={'Email.holt@example.com'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> 
        </Email>

        <Password>
            <Input 
              type={"password"  }
              name={"password" }
              label={"Password"}
              placeholder={'••••••••' }
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              /> 

            <Input 
              type={"password" }
              name={"password"} 
              label={"Confirme Password"}
              placeholder='••••••••' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              /> 
             
        </Password>

        
        <Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Cadastrar</Button>
    
    </Sign>)
} 