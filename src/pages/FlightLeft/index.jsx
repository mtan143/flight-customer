import React from "react";
import PropTypes from "prop-types";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

FlightLeft.propTypes = {};

function FlightLeft(props) {

  return (
    <div className="body">
      <div className="toast__icon">
        {/* <LooksOneIcon style={{fontSize:"50px"}} /> */}
        <button
                  variant="contained"
                  class="btn btn-primary"
                  type="button"
                  style={{width:"40px" , height:"40px", borderRadius:"50%", margin:0}}
                 
                >
                 
                  {props.id}
                </button>
      </div>
      <div className="toast__body">
        <p className="toast__title">{props.date}</p>
        <h4 className="toast__msg">{props.name}</h4>
        {/* <span>123</span> */}
      </div>
    </div>
  );
}

export default FlightLeft;
