import {  useState, InputHTMLAttributes } from "react";
import { 
    Container,
    InputField,
    Eyes,
    Eyes2,
    WrapInput 
} from './style'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{
    type: string;
    name?:string;
    label?:string;
    placeholder?:string;
}

const Input = ({type,name,label,placeholder}: PropsInput) => {
    const [show, setShow] = useState(false);
  
    function handleClick(e: React.MouseEvent){
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

export default Input;