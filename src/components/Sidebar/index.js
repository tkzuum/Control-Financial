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


export default function SideBar({ Page }) {
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
                    <IconBsArrowLeftShort active={isOpen} onClick={() => setIsOpen(false)} />

                </Top_section>

                <ul>

                    <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                        <Icon><IconAiOutlineHome /></Icon>
                        <Link activeclassName="active" href="/home">
                            <title>Home</title>
                        </Link>
                    </Link_text>



                    <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                        <Icon ><IconMdOutlineSpaceDashboard /></Icon>
                        <Link activeclassName="active" href="/dashboard">
                            <title>Dashboard</title>
                        </Link>
                    </Link_text>



                    <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                        <Icon ><IconGrAnalytics /></Icon>
                        <Link activeclassName="active" href="/analytics">
                            <title>Analytics</title>
                        </Link>
                    </Link_text>



                    <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                        <Icon ><IconFaGlobeAmericas /></Icon>
                        <Link activeclassName="active" href="/news">
                            <title>Noticias</title>
                        </Link>
                    </Link_text>



                    <Link_text onClick={() => setIsOpen(true)} active={isOpen}>
                        <Icon ><IconBsChatDots /></Icon>
                        <Link activeclassName="active" href="/dashboard">
                            <title>Chat</title>
                        </Link>
                    </Link_text>

                </ul>

                <IconHiOutlineLogout />
                <p active={isOpen} >Logout</p>
            </Sidebar>


        </Container>
    );

}