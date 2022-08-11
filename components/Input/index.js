import { useState } from "react";
import {
    Container,
    InputField,
    Eyes,
    Eyes2,
    WrapInput 

} from './style'


export default function Input({type,name,label,placeholder}) {
    const [show, setShow] = useState(false);
  
    function handleClick(e){
      e.preventDefault()
        setShow(!show)
    }

    return (
        <Container>
            <label>{label}</label>
                <WrapInput >
                    <InputField type={type == "password" ? (show ? "text" : "password") : type } name={name} placeholder={placeholder}/>
                    { 
                        type == 'password' ? (show ? 
                            (<Eyes onClick={handleClick}/> ): 
                            (<Eyes2 onClick={handleClick}/>)
                            ): (
                                " "
                            )
                        
                    }
                </WrapInput>
        </Container>
    )
}