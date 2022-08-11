import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible , AiOutlineEye} from "react-icons/ai";

export const Container =  styled.div`
    position: relative;
    height: 100vh;
    width:  410px;
`;

export const WrapInput =  styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 40px;

    > Input{
        position: relative;
        left: 0px;
        top: 8px;
    }

    > label{
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
    }

    @media (max-width: 500px) {
        > Input {
            height: 44px;
            width: 290px;
        }
    }
`;

export const Google =  styled(FcGoogle)`
    height: 24px;
    width:  24px;
`;

export const Access =  styled.div`
    position: relative;
    top: 65px;

    > Button{
        margin-bottom: 27px;
    }
`;

export const Eyes =  styled(AiOutlineEye)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    left: 335px;
    top: 40px;
    
    @media (max-width: 500px) {
        left: 270px;
    }
`;

export const Eyes2 =  styled(AiOutlineEyeInvisible)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    left: 335px;
    top: 40px;

    @media (max-width: 500px) {
        left: 270px;
    }
`;

export const SignUp =  styled.div`
    height: 21px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    > a{
        text-decoration: none;
        color: rgba(84, 41, 255, 1);

        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }

`;

