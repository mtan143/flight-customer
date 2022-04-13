import React from "react";
import PropTypes from "prop-types";
import cover from "../../resource/cover.png";
import header1 from "../../resource/header1.png";
import header2 from "../../resource/header2.png";
import header3 from "../../resource/header3.png";
import h1 from "../../resource/h1.jpg";
import h4 from "../../resource/h4.jpg";
import "./style.css";
import { Slide } from "react-slideshow-image";
Cover.propTypes = {};

function Cover(props) {
  const slideImages = [
    "images/slide_2.jpg",
    "images/slide_3.jpg",
    "images/slide_4.jpg",
  ];

  return (
    <div>
      {/* <div>
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
      </div> */}

      <div>
        <img
          className="header"
          //   style={{ width: "100%" }}
          src={cover}
          alt=""
        />
      </div>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={header1} alt="Los Angeles" />
          </div>
          <div class="carousel-item">
            <img src={header2} alt="Chicago" />
          </div>
          <div class="carousel-item">
            <img src={header3} alt="New York" />
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
     </div>
  );
}

export default Cover;
