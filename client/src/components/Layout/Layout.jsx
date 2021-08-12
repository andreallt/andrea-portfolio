import "./Layout.css";
import NavBar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx"

const Layout = (props) => (
  <div className="Layout">
    <NavBar user={props.user} />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout