import { Link } from "react-router-dom";
import "./DevProject.css";

const DevProject = (props) => {
  return (
    <>
        <div className="dev-project">
      <Link className="develop" to={`/developer_projects/${props.id}`}>
          <p className="dev-name">{props.name}</p>
          <img src={props.image_url} alt={props.name} className="dev-image" />
      </Link>    
      <div className="d-buttons">
          <button herf={props.github_url} className="dev-button">GITHUB</button>
          <button herf={props.web_url} className="dev-button">SITE</button>
       </div>
          </div>
    </>
  )
}

export default DevProject