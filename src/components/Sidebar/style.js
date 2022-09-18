import styled from 'styled-components';
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsChatDots, BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";


export const IconMdOutlineSpaceDashboard = styled(MdOutlineSpaceDashboard)`
    height: 24px;
    width: 24px;
`;

export const IconGrAnalytics = styled(GrAnalytics)`
    height: 24px;
    width: 24px;
`;

export const IconHiOutlineLogout = styled(HiOutlineLogout)`
    height: 24px;
    width: 24px;
    position: fixed;
    bottom: 4%;
    left: 28px;
    
`;

export const IconAiOutlineHome = styled(AiOutlineHome)`
    height: 24px;
    width: 24px;
`;

export const IconFaGlobeAmericas = styled(FaGlobeAmericas)`
    height: 24px;
    width: 24px;
`;

export const IconBsChatDots = styled(BsChatDots)`
    height: 24px;
    width: 24px;
`;

export const IconBsArrowLeftShort = styled(BsArrowLeftShort)`
    height: 24px;
    width: 24px;
    position: relative;
    left: 30px;
    top: 15px;
    color:#53545C;

    @media (max-width: 375px){
        display: none;
    }

    display:${props => props.active ? "block" : "none"};
`;

export const Logo = styled.div`
    position: relative;
    top: 15px;
    left: 23px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    

    p{
        @media (max-width: 375px){
            display: none;
        }
        display:${props => props.active ? "block" : "none"};
        margin-left: 10px;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }

`;


export const Container = styled.div`
    position: fixed;

`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 88px;
    height: 100vh;
    position: relative;
    left: 2px;

    @media (max-width: 375px){
        width: 88px;
    }

    width:${props => props.active ? "200px" : "88px"};

    > p{
        position: fixed;
        bottom: 4%;
        left: 65px;
        display:${props => props.active ? "block" : "none"};

        @media (max-width: 375px){
            display: none;
        }

        margin-left: 10px;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }
`

export const Top_section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
    margin-top: 16px;
`

export const Icon = styled.div`
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    
`

export const Link_text = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 17px;
    padding-left: 12px;
    top: 12px;
    color:#53545C;
    cursor: pointer;
    
    title{
        margin-left: -20px;
        display:${props => props.active ? "block" : "none"};

        @media (max-width: 375px){
            display: none;
        }

        font-family: 'Inter';
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
    }

    &:hover{
        color:black;
        title{
            font-size: 14.5px;
        }

        @media (max-width: 375px){
            width:36px;
        }

        width:${props => props.active ? "150px" : "36px"};
        background-color: rgba(145, 228, 137, 0.5);
        border-radius: 12px;
    }
`
export const Menu = styled.div`
    position: absolute;
    top:0;
    background-color:white;
    height: 50px;
    width:100vw;
    padding-top:35px;
    display: flex;
    
    flex-direction: row;

`;

export const User = styled.div`
    position: absolute;
    right: 5%;
    top:35px;

`

export const Name = styled.div`
    position: absolute;
    left:${props => props.active ? "220px" : "100px"};
    top:40px;

    margin-left: 10px;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;

    @media (max-width: 750px) {
        display:${props => props.active ? "none" : "block"};
    }


    @media (max-width: 375px){
        display: none;
    }

`