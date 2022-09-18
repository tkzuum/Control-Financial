import { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import {
    Container,
    Sidebar,
    Top_section,
    Icon,
    Link_text,
    IconFaGlobeAmericas, 
    IconBsChatDots,
    IconAiOutlineHome,
    IconGrAnalytics,
    Logo,
    IconBsArrowLeftShort,
    IconMdOutlineSpaceDashboard,
    IconHiOutlineLogout,
    Menu,
    Name,
    User

} from './style'
import Search from "../Search";


export default function SideBar({Page}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container  >

            <Sidebar active={isOpen} >
                <Menu >
                    <Search></Search>

                    <Name active={isOpen} >{Page}</Name>

                    <User>Name user</User>
                </Menu>
                <Top_section >
                    <Logo active={isOpen}>
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width="36"
                            height="36" 
                        />
                        <p >Trade Next</p>
                    </Logo>
                 <IconBsArrowLeftShort active={isOpen} onClick={() => setIsOpen(false)}/>

                </Top_section>

                <ul>    
                    <Link activeclassName="active" href="/dashboard">
                        <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                            <Icon><IconAiOutlineHome/></Icon>
                            <title>Home</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                            <Icon ><IconMdOutlineSpaceDashboard/></Icon>
                            <title>Dashboard</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                            <Icon ><IconGrAnalytics /></Icon>
                            <title>Analytics</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                            <Icon ><IconFaGlobeAmericas /></Icon>
                            <title>Noticias</title> 
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                            <Icon ><IconBsChatDots /></Icon>
                            <title>Chat</title>
                        </Link_text>
                    </Link>
                </ul>

                <IconHiOutlineLogout />
                <p active={isOpen} >Logout</p>
            </Sidebar>

            
        </Container>
    );

}