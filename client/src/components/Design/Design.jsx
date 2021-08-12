import { Link } from "react-router-dom";
import "./Design.css";

export default function Design (props) {
  return (
    <>
      <Link className="designProject" to={`/design_projects/${props.id}`}>
        <div className="container">
          <p className="name">{props.name}</p>
          <img src={props.image_1} alt={props.name} className="design-image" />
        </div>
        <div className="details">
          <p className="category">{props.category}</p>
        </div>
      </Link>
    </>
  );
}
