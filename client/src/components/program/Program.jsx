import "./program.css";

export default function Program() {
  return (
    <div className="program">
      <img
        className="programImg"
        src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg"
        alt=""
      />
      <div className="programInfo">
        <div className="programCats">
          <span className="programCat">Science</span>
          <span className="programCat">Fiction</span>
        </div>
        <span className="programTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="programDate">1 Hour Ago</span>
      </div>
      <p className="programDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam quo
        beatae ab voluptates alias neque ea quisquam maiores placeat nisi nihil,
        tempore laborum tempora. Voluptates id libero soluta mollitia. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Qui error, soluta
        corrupti accusantium deserunt labore dolores ea blanditiis expedita
        delectus sequi! Inventore, et harum? Officia voluptatem modi repellendus
        animi suscipit.
      </p>
    </div>
  );
}
