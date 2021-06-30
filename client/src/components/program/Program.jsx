import "./program.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Program({ post }) {
  const PF = "http://localhost:4000/images/"
  console.log("POST", post);
  const teacherId = post.teacherId;
  const [teacher, setTeacher] = useState({});
  console.log("TCI",teacherId);

    useEffect(() => {
       const fetchTeacher = async ()=>{
        axios.get('http://localhost:4000/teacher/'+teacherId)
        .then(response =>{
            console.log("Axios Response",response);
            setTeacher(response.data);
        })
        .catch(error => {
            console.log(error);
        });
       }
       fetchTeacher();
    }, [teacherId])

    console.log("TEACHERID",teacher);
  return (
    <div className="program">
      {post.img && <img className="programImg" src={post.img} alt="" />}
      <div className="programInfo">
        <div className="programTeacher">
          <span className="teacherName">{teacher?.name || teacher[0]?.name}</span>
          <span className="teacherSurname">{teacher?.surname || teacher[0]?.surname}</span>
        </div>
        <Link to={`/program/${post.id}`} className="link">
          <span className="programTitle">{post?.title}</span>
        </Link>
        <hr />
        <span className="programDate">
          {new Date(post?.programDate).toDateString()}
        </span>
      </div>
      <p className="programDesc">{post?.info}</p>
    </div>
  );
}
