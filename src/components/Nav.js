import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Nav = () => {
    const location = useLocation()
    return ( 
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="is-active"><Link to={location}>{location.pathname.substr(1)}</Link></li>
        </ul>
      </nav>
     );
}
 
export default Nav;