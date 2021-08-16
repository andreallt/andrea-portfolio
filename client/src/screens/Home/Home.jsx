import "./Home.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Home = (props) => {
  return (
<Layout admin={props.admin}>
    <div>
      <p>Andrea!</p>
    </div>
</Layout>
  )
}

export default Home