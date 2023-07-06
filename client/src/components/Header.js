import React from "react";
import {Component} from "react";

class Header extends Component {
 render(){
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a  href="" className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a href="">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
 }
}

export default Header;
