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
    IconBiLogOut

} from './style'


export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container  >
            <Sidebar style={{ width: isOpen ? "200px" : "88px" }} onMouseEnter={() => setIsOpen(true)} >
                <Top_section >
                    <Logo>
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width="36"
                            height="36" 
                        />
                        <p style={{ display: isOpen ? "block" : "none" }}>Trade Next</p>
                    </Logo>
                 <IconBsArrowLeftShort style={{ display: isOpen ? "block" : "none" }} onClick={() => setIsOpen(false)}/>

                </Top_section>

                <ul>    
                    <Link activeclassName="active" href="/dashboard">
                        <Link_text >
                            <Icon>{<IconAiOutlineHome/>}</Icon>
                            <title style={{ display: isOpen ? "block" : "none" }}>Home</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text>
                            <Icon ><IconMdOutlineSpaceDashboard/></Icon>
                            <title style={{ display: isOpen ? "block" : "none" }}>Dashboard</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text>
                            <Icon >{<IconGrAnalytics />}</Icon>
                            <title style={{ display: isOpen ? "block" : "none" }}>Analytics</title>
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text >
                            <Icon >{<IconFaGlobeAmericas />}</Icon>
                            <title style={{ display: isOpen ? "block" : "none" }}>Noticias</title> 
                        </Link_text>
                    </Link>

                    <Link activeclassName="active" href="/dashboard">
                        <Link_text>
                            <Icon >{<IconBsChatDots />}</Icon>
                            <title style={{ display: isOpen ? "block" : "none" }}>Chat</title>
                        </Link_text>
                    </Link>
                </ul>

                <IconBiLogOut style={{ left: isOpen ? "155px" : "28px" }}/>
            </Sidebar>
        </Container>
    );

}