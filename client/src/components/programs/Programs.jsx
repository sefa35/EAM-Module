import Program from "../program/Program";
import "./programs.css";

export default function Programs({ programs }) {
    
    
  return (
    <div className="programs">
      {programs.map((p) => (
        <Program program={p} />
      ))}
    </div>
  );
}
