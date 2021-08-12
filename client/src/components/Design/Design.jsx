import { Link } from "react-router-dom";
import "./Design.css";

const Design = (props) => {
  return (
    <>
      <Link className="designProject" to={`/design_projects/${props.id}`}>
        <div>
          <p className="name">{props.name}</p>
          <img src={props.image_1}alt={props.name} className="design-image" />
          <p className="category">{props.category}</p>
          </div>
      </Link>
    </>
  )
}

export default Design