import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
     <Link to={`/login`}>...🦏 ...</Link>
    </div>
  );
}

export default Footer;