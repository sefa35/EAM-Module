import { useState } from "react";
import axios from "axios";
import "./create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [fileImg, setFileImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProgram = {
      title,
      info,
      visible: true,
      teacherId: 1,
      programDate: "2021-08-01",
    };
    if (fileImg) {
      const data = new FormData();
      const filename = Date.now() + fileImg.name;
      data.append("name", filename);
      data.append("fileImg", fileImg);
      newProgram.img = filename;
    }
    axios
      .post("http://localhost:4000/", newProgram)
      .then((response) => {
        console.log(response);
        window.location.replace("/program/"+response.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="create">
      {fileImg && (
        <img
          className="createImg"
          src={URL.createObjectURL(fileImg)}
          alt=""
        />
      )}

      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon far fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFileImg(e.target.files[0])}/>
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="Program Information..."
            type="text"
            className="createInput createText"
            onChange={(e)=>setInfo(e.target.value)}
          ></textarea>
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
