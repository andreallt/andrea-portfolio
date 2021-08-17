import "./Home.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Home = (props) => {
  return (
<Layout admin={props.admin}>
    <div id="homie">
      <Link to="/developer_projects">
      <img id="home" src="https://imgur.com/fIagkcG.giff" alt="projects"></img>
      </Link>
    </div>
</Layout>
  )
}

export default Home