import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import "./style.css";
import { Typography } from "@mui/material";
import NumericInput from "react-numeric-input";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ChildCareIcon from "@mui/icons-material/ChildCare";
InDecrease.propTypes = {};

function InDecrease(props) {
  const [countAdult, setCountAdult] = useState(1);

  const [countChildren, setCountChildren] = useState(0);

  // const [count, setCount] = useState(0);
  const [countBaby, setCountBaby] = useState(0);

  const [isToggle, setIsToggle] = useState(false);

  // const myFormat = (num) => {
  //   return num + '$';
  // }

  const handleNumberChange = (value) => {
    setCountAdult(value);
  };

  const handleNumberChangeChildren = (value) => {
    setCountChildren(value);
  };

  const handleNumberChangeBaby = (value) => {
    setCountBaby(value);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="inDecrease">
      <label>Số hành khách</label>
      <div className="people1">
        <div className="people" onClick={handleToggle}>
          <PeopleIcon />
          {countAdult} Người Lớn, {countChildren} Trẻ Em , {countBaby} Em Bé
        </div>

        {/* ------------------------------- */}
        {isToggle ? (
          <div className="quanity">
            <div className="decrease">
              <PeopleIcon />
              <span> người lớn</span>
              <div className="numericInput">
                <NumericInput
                  min={0}
                  max={7}
                  value={countAdult}
                  onChange={handleNumberChange}
                  className={"numericInput"}
                  label="Người lơn"
                  style={{float:"right"}}
                />
              </div>
            </div>

            <div className="decrease">
              <AccessibilityNewIcon />
              <span> trẻ em </span>
              <div className="numericInput">
                <NumericInput
                  min={0}
                  max={7}
                  value={countChildren}
                  onChange={handleNumberChangeChildren}
                  className={"numericInput"}
                  style={{float:"right"}}
                  label="Trẻ em"
                />
              </div>
            </div>

            <div className="decrease">
              <ChildCareIcon />
              <span> em bé</span>
              <div className="numericInput">
                <NumericInput
                  min={0}
                  max={7}
                  value={countBaby}
                  onChange={handleNumberChangeBaby}
                  label="Em bé" 
                  className={"numericInput"}
                  style={{float:"right"}}
                />
              </div>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default InDecrease;
