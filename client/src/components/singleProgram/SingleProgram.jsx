import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./singleProgram.css";
import { Context } from "../../context/Context";

export default function SingleProgram() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [program, setProgram] = useState({});
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [updateMode, setupdateMode] = useState(false);

  const { user } = useContext(Context);
  var adminUser = false;

  if (user?.admin === 1) {
    adminUser = true;
  }

  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    const getProgram = async () => {
      axios
        .get("http://localhost:4000/" + path)
        .then((response) => {
          console.log("Axios Response Single", response);
          setProgram(response.data);
          setTitle(response.data.title);
          setInfo(response.data.info);
          const teacherId =
            response.data?.teacherId || response.data[0]?.teacherId;
          axios
            .get("http://localhost:4000/teacher/" + teacherId)
            .then((response) => {
              console.log("Axios Response", response);
              setTeacher(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getProgram();
  }, [path]);

  const handleDelete = async () => {
    axios
      .delete("http://localhost:4000/" + path)
      .then((response) => {
        console.log("Axios Response", response);
        window.location.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = async () => {
    axios
      .put("http://localhost:4000/" + path, {
        title,
        info,
      })
      .then((response) => {
        console.log("Axios Response", response);
        window.location.reload();
        setupdateMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("PROGRAM", program);
  return (
    <div className="singleProgram">
      <div className="singleProgramWrapper">
        {program?.img ||
          (program[0]?.img && (
            <img
              src={program.img || program[0]?.img}
              alt=""
              className="singleProgramImg"
            />
          ))}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singleProgramTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleProgramTitle">
            {program.title || program[0]?.title}
            {adminUser && (
              <div className="singleProgramEdit">
                <i
                  className="singeProgramIcon far fa-edit"
                  onClick={() => setupdateMode(true)}
                ></i>
                <i
                  className="singeProgramIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}

            <div className="singleProgramEdit">
              <i className="singeProgramIcon fas fa-plus-circle"></i>
            </div>
          </h1>
        )}

        <div className="singleProgramInfo">
          <span className="singleProgramTeacher">
            Teacher: <b>{teacher.name || teacher[0]?.name}</b>
            <b>{teacher.surname || teacher[0]?.surname}</b>
          </span>
          <span className="singleProgramDate">
            {new Date(program.programDate).toDateString() ||
              new Date(program[0]?.programDate).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singleProgramDescInput"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        ) : (
          <p className="singleProgramDesc">
            {program.info || program[0]?.info}
          </p>
        )}
        {updateMode && (
          <button className="singleProgramButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
