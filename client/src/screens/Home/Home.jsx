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
        <img src="https://imgur.com/TtT9ots.png" alt="HTML"/>
        <img src="https://imgur.com/xYB7zh4.png" alt="css" />
        <img src="https://imgur.com/XxPMXZa.png" alt="JavaScript"/>
        <img src="https://imgur.com/O2SGzz2.png" alt="react"/>
        <img src="https://imgur.com/pfnHrUy.png" alt="express"/>
        <img src="https://imgur.com/e8ksfgN.png" alt="node"/>
        <img src="https://imgur.com/K6DsHSc.png" alt="git"/>
        <img src="https://imgur.com/Hs0zRyY.png" alt="mongoDB"/>
        <img src="https://imgur.com/t48aukM.png" alt="sql"/>
        <img src="https://imgur.com/iT58yjW.png" alt="postgresql"/>
        <img src="https://imgur.com/E4np4Cx.png" alt="rails" />
        <img src="https://imgur.com/t6kPJZb.png" alt="ruby"/>
      </section>

      <Link to="/developer_projects">
      <img id="home" src="https://imgur.com/fIagkcG.giff" alt="projects"></img>
      </Link>
    </div>
</Layout>
  )
}

export default Home