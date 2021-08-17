import "./Layout.css";
import NavBar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header";

const Layout = (props) => (
  <div className="Layout">
    <Header admin={props.admin}/>
    <NavBar admin={props.admin} />
    <div className="layout-children" admin={props.admin}>{props.children} </div>
    <Footer />
  </div>
);

export default Layout