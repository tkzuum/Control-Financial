import styled from 'styled-components';
import { GrAnalytics } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsChatDots, BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";




export const IconMdOutlineSpaceDashboard = styled(MdOutlineSpaceDashboard)`
    height: 24px;
    width: 24px;
    cursor: pointer;
`;

export const IconGrAnalytics = styled(GrAnalytics)`
    height: 24px;
    width: 24px;
`;

export const IconBiLogOut = styled(BiLogOut)`
    height: 24px;
    width: 24px;
    position: relative;
    top: 530px;
    left: 155px;
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

export const Logo = styled.div`
    position: relative;
    top: 15px;
    left: 23px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p{
        margin-left: 10px;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }

`;

export const IconBsArrowLeftShort= styled(BsArrowLeftShort)`
    height: 24px;
    width: 24px;
    position: relative;
    left: 30px;
    top: 15px;
    color:#53545C;
`;


export const Container = styled.div`

`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 88px;
    height: 100vh;
    position: relative;
    left: 2px;
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
    color: #53545C;
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

        background-color: rgba(145, 228, 137, 0.5);
        width: 150px;
        border-radius: 12px;
    }
`
