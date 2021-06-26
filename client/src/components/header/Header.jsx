import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="titleLarge">EAM</span>
            <span className="titleSmall">Extracurricular Activities Management Module</span>
        </div>
      <img
      className="headerImg"
        src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-roberto-nickson-2559941.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
