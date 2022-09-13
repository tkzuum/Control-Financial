import { GrAnalytics } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobeAmericas ,FaBars} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Link from "next/link";

import {
    Container,
    Sidebar,
    Top_section,
    Icon,
    Link_text
}from './style'


export default function SideBar(){
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <Container>
            <Sidebar style={{width: isOpen ? "200px" : "50px"}} >
                <Top_section>
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </Top_section>

                <Link activeclassName="active">
                    <Icon>{<AiOutlineHome/>}</Icon>
                    <Link_text style={{display: isOpen ? "block" : "none"}}>Home</Link_text>
                </Link>
                
                <Link activeclassName="active">
                    <Icon>{<GrAnalytics/>}</Icon>
                    <Link_text style={{display: isOpen ? "block" : "none"}}>Dashboard</Link_text>
                </Link>
                
                <Link activeclassName="active">
                    <Icon>{<FaGlobeAmericas/>}</Icon>
                    <Link_text style={{display: isOpen ? "block" : "none"}}>Noticias</Link_text>
                </Link>
                
                <Link activeclassName="active">
                    <Icon>{<BsChatDots/>}</Icon>
                    <Link_text style={{display: isOpen ? "block" : "none"}}>Chat</Link_text>
                </Link>

            </Sidebar>
        </Container>
    );
    
}