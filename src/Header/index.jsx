import React from "react";
// import cover from "../resource/cover.png";
// import Home from './Home';
// import cover from './Cover/cover.png';
import cover from '../resource/cover.png';
import Navbar from './Navbar/index';
import Cover from './Cover/index';


function Header(props) {
  return (
    
    <div>
      <Navbar />
     <Cover />
    </div>
  );
}

export default Header;
