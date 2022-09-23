
import BasicLine from "../components/Graphics/BasicLine"
import Sidebar from "../components/Sidebar"
import {
    Body,
}from "../styles/dashboard"


export default function Dashboard(){
    return(
        <Body>
            <Sidebar Page={'Dashboard'}/>
            <BasicLine/>
        </Body>
    )
}