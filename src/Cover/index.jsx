import React from "react";
import cover from "../resource/cover.png";
import header1 from "../resource/header1.png";
import header2 from "../resource/header2.png";
import header3 from "../resource/header3.png";

import { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import "./style.css";
import { color, style } from "@mui/system";


Cover.propTypes = {};

function Cover(props) {
  const img = [
    header1,header2,header3,header1,header1,header1
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return ( 

    <div style={{marginTop:10,  }}>
      <div>
        <img className="cover" src={cover} alt="" />
      </div>
      <div className="carousel">
      <Carousel 
        updateOnItemClick
        arrows
        
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
            
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          
         
        }}
        centerMode={true}
        onRequestChange={setActiveSlide}
       
      
        forwardBtnProps={{
          
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            
            
          }
          
          
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",

          }
        }}
        itemsToShow={3}
        speed={400}
        
      >
        
        {img.map((item, index) => (
          <div
            style={{
              width: 500,
              height: 300,
              // border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          > <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
}

export default Cover;
