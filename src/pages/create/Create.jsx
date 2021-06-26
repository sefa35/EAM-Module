import "./create.css";

export default function Create() {
  return (
    <div className="create">
      <img
      className="createImg"
        src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg"
        alt=""
      />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon far fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="createInput"
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            placeholder="Program Information..."
            type="text"
            className="createInput createText"
          ></textarea>
        </div>
        <button className="createSubmit">Publish</button>
      </form>
    </div>
  );
}
