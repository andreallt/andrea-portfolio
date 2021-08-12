import { Link } from "react-router-dom";
import "./DevProject.css";

const DevProject = (props) => {
  return (
    <>
      <Link className="devProject" to={`/developer_projects/${props.id}`}>
        <div>
          <p className="name">{props.name}</p>
          <img src={props.image_url} alt={props.name} className="dev-image" />
          <p className="git">{props.github_url}</p>
          <p className="web">{props.web_url}</p>
          </div>
      </Link>
    </>
  )
}

export default DevProject