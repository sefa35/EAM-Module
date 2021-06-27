import Header from "../../components/header/Header"
import Programs from "../../components/programs/Programs"
import axios from "axios"
import "./home.css"

export default function Home() {
    return (
        <div>
            <Header/>
            <Programs/>
        </div>
    )
}
