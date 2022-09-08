import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth} from '../../services/firebase';

import {database} from "../../services/firebase"

import { 
    Sign,
    Name,
    Email,
    Password,
    WrapInput,
    Google,
    Login,
} from './style'
import Button from '../Button'
import Input from '../Input'



export default function SignUpForm(){

    const schema =  yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        lastName: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório"),
        password: yup.string().min(6,"Minimo 6 caracteres").required("Campo obrigatório"),
        confirmPassword: 
        yup.string()
        .required('Campos obrigatório')
        .oneOf([yup.ref('password')], 'Senha não confere'),
    })

    const { register , handleSubmit , formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    });

    function signUpWithGoogle() {
        const provider = new GoogleAuthProvider();
        const ref = database.ref("usuarios");
    
        signInWithPopup(auth, provider)
          .then((result) => {
            const dados = {
                email: result.user.email,
                password: result.user.uid,
                name : result.user.displayName,
                lastName :""
            }
            ref.push(dados)
    
          }).catch((error) => {
            console.log(error);
          });
    }

    const addSubmit = async (data)=> {      
        const auth = getAuth()

        const { user } = await createUserWithEmailAndPassword(auth, data.email,data.password)
        
        await updateProfile(user, {
            displayName: `${data.name} ${data.lastName}`
        });
    }

    return (
    <Sign>
        <form onSubmit={handleSubmit(addSubmit)}>
            <Name>
                <WrapInput>
                    <Input 
                        type={"text"} 
                        name={"name"}
                        label={"Nome"} 
                        placeholder={""}
                        register={register}
                        error={errors.name?.message}
                    /> 
                </WrapInput>
                <WrapInput>
                    <Input 
                        type={"text"} 
                        name={"lastName"} 
                        label={"Sobrenome"} 
                        placeholder={""}
                        register={register }
                        error={errors.lastName?.message}
                    />
                </WrapInput>
            </Name>
            
                
            <Email>
                <Input
                    type={"email"} 
                    name={"email"}
                    label={"Email"}
                    placeholder={'Email.holt@example.com'}
                    register={register}
                    error={errors.email?.message}
                /> 
            </Email>

            <Password>
                <Input 
                type={"password"  }
                name={"password" }
                label={"Password"}
                placeholder={'••••••••' }
                register={register}
                error={errors.password?.message}
                /> 

                <Input 
                type={"password" }
                name={"confirmPassword"} 
                label={"Confirme Password"}
                placeholder={'••••••••' }
                register={register}
                error={errors.confirmPassword?.message}
                /> 
                
            </Password>
            
            <Button type="submit" backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Cadastrar</Button>
            <Button type="button" onClick={signUpWithGoogle}><Google/>&nbsp;Login with Google</Button>

            <Login>
              <span>Já possui conta?&nbsp;</span>
              <Link href="/login">
                  Login
              </Link>
            </Login>
        </form>
    </Sign>)
} 