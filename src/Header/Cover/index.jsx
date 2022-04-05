import React from "react";
import PropTypes from "prop-types";
import cover from "../../resource/cover.png";
import header1 from "../../resource/header1.png";
import header2 from "../../resource/header2.png";
import "./style.css";
Cover.propTypes = {};

function Cover(props) {
  return (
    <div>
      <div>
        <img
          className="header"
        //   style={{ width: "100%" }}
          src={cover}
          alt=""

        />
        <div className="banner">
         <img className="header1" src={header1} alt="" />
         <img className="header2" src={header2} alt="" />
         </div>
      </div>
      
    </div>
  );
}

export default Cover;
