import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";

export const Sign = styled.div`
    Input,label{
        font-size: 16px;
    } 
    Button{
        margin-top: 15px;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 45px;
    Input{
        width: 157px;
        margin-right: 20px;
    }

     @media (max-width: 500px) {
        Input{
            width: 125px;
        }
    }

`;


export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;

    > Input {
        margin-right: 20px;
        margin-top: 10px;
        width: 164px;
    }
`;

export const Google =  styled(FcGoogle)`
    height: 24px;
    width:  24px;
`;

export const Email = styled.div`

`;

export const Password = styled.div`

`;
