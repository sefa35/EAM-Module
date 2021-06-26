import "./singleProgram.css";

export default function SingleProgram() {
  return (
    <div className="singleProgram">
      <div className="singleProgramWrapper">
        <img
          src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg"
          alt=""
          className="singleProgramImg"
        />
        <h1 className="singleProgramTitle">
          Lorem ipsum dolor sit amet
          <div className="singleProgramEdit">
            <i className="singeProgramIcon far fa-edit"></i>
            <i className="singeProgramIcon far fa-trash-alt"></i>
            <i className="singeProgramIcon fas fa-plus-circle"></i>
          </div>
        </h1>
        <div className="singleProgramInfo">
          <span className="singleProgramTeacher">
            Teacher: <b>Sefa</b>
          </span>
          <span className="singleProgramDate">1 Hour Ago</span>
        </div>
        <p className="singleProgramDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro
          fugit, quidem velit animi similique id. Sunt debitis asperiores
          numquam pariatur laborum iusto velit libero, rem, corrupti quod vel
          aut?
        </p>
      </div>
    </div>
  );
}
