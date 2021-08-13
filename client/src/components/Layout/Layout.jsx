import "./Layout.css";
import NavBar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx"

const Layout = (props) => (
  <div className="Layout">
    <header>
      <img src="https://imgur.com/QRKRsnF.png" alt="linkedin"/>
      <img src="https://imgur.com/GQHDRqn.png" alt="github"/>
    </header>
    <NavBar admin={props.admin} />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout