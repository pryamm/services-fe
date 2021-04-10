import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const history = useHistory()

    const signout = (e) => {
      e.preventDefault()

      axios.post('http://localhost:9000/user/signout/', {}, {withCredentials: true})
            .then(res=>{
                console.log(res)
            })  
    }

    return ( 
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt=""/>
          </a>

          <div onClick={()=>setIsActive(!isActive)} role="button" className={`navbar-burger  ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu  ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link  to="/tenders" className="navbar-item">
              Tenders
            </Link>
          </div>

          <div className="navbar-end">
            <div className={`navbar-item has-dropdown ${isClick ? 'is-hoverable' : ''}`}>
                <div onClick={()=>setIsClick(!isClick)} className="navbar-link">
                  My Account
                </div>
                <div className={`navbar-dropdown ${isClick ? 'is-hidden-touch' : ''}`}>
                  <Link to="/users" className="navbar-item">Profile</Link>
                  <hr className="navbar-divider"/>
                  <a onClick={signout} className="navbar-item has-text-weight-bold">Logout</a>
                </div>           
            </div>

            <div className="navbar-item">
              <div className="buttons">   
                <Link  to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link  to="/signin" className="button is-light">
                  Log in
                </Link>              
              </div>
            </div>
          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;