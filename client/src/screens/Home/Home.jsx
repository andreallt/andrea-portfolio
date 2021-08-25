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

      <section className="icons">
        <img className="icon" src="https://imgur.com/6bbdJXw.png" alt="HTML"/>
        <img className="icon" src="https://imgur.com/12g4gdD.png" alt="css" />
        <img className="icon" src="https://imgur.com/XxPMXZa.png" alt="JavaScript"/>
        <img className="icon" src="https://imgur.com/O2SGzz2.png" alt="react"/>
        <img className="icon"  src="https://imgur.com/740cn0P.png" alt="express"/>
        <img className="icon" src="https://imgur.com/HDvOP3a.png" alt="node"/>
        <img className="icon" src="https://imgur.com/8S73zZR.png" alt="git"/>
        <img className="icon" src="https://imgur.com/kP9zhYk.png" alt="mongoDB"/>
        <img className="icon" src="https://imgur.com/sScVgck.png" alt="sql"/>
        <img className="icon"src="https://imgur.com/vN9eNg0.png" alt="postgresql"/>
        <img className="icon" src="https://imgur.com/jWtiD2G.png" alt="rails" />
        <img className="icon" src="https://imgur.com/I7NRqX2.png" alt="ruby"/>
      </section>

      <Link to="/developer_projects">
      <img id="home" src="https://imgur.com/fIagkcG.giff" alt="projects"></img>
      </Link>
    </div>
</Layout>
  )
}

export default Home