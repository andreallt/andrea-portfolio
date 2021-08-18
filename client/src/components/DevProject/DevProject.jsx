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
          <a id="button" href={props.github_url} target="_blank" ><button className="dev-button" >GITHUB</button> </a>
          <a id="button" href={props.web_url}  target="_blank"><button className="dev-button">SITE</button></a>
       </div>
          </div>
    </>
  )
}

export default DevProject