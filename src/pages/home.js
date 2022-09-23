
import Sidebar from "../components/Sidebar"
import {
    Body,
}from "../styles/dashboard"


export default function Home(){
    return(
        <Body>
            <Sidebar Page={'Dashboard'}/>
        </Body>
    )
}