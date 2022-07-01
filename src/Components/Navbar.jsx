import React from "react";

const Navbar = () => {
    return (
        <div className = "app-wrapper__navigation">
        <nav>
          <ul>
            <li>
               <a href="#">Message</a> 
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar;