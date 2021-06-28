import { useEffect,useState } from "react";
import Header from "../../components/header/Header";
import Programs from "../../components/programs/Programs";
import axios from "axios";
import "./home.css";

export default function Home() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
       const fetchPosts = ()=>{
        axios.get('http://localhost:4000/')
        .then(response =>{
            console.log("Axios Response",response);
            setPrograms(response.data);
        })
        .catch(error => {
            console.log(error);
        });
       }
       fetchPosts();
    }, [])

  return (
    <div>
      <Header />
      <div className="home">
        <Programs programs={programs}/>
      </div>
    </div>
  );
}
