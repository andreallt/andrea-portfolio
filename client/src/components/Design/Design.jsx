import { Link } from "react-router-dom";
import "./Design.css";

const Design = (props) => {
  return (
    <>
        <div className="design-p">
          <Link className="design" to={`/design_projects/${props.id}`}>
          <img src={props.image_1} alt={props.name} className="design-image" />
          <p className="category">{props.category}</p>
         </Link>
          </div>
    </>
  )
}

export default Design