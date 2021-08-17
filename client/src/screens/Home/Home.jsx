import "./Home.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Home = (props) => {
  return (
<Layout admin={props.admin}>
    <div id="homie">
      <h2 className="about">
       Passionate and experienced in graphic design and media. My background has allowed me to be a creative problem solver
       and a hybrid web designer, developing smart, efficient, and
       impeccably designed products.
      </h2>
      <Link to="/developer_projects">
      <img id="home" src="https://imgur.com/fIagkcG.giff" alt="projects"></img>
      </Link>
    </div>
</Layout>
  )
}

export default Home