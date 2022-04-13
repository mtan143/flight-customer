import React, { useState } from "react";
import PropTypes from "prop-types";
import VerticalTabs from "../../VerticalTabs";

Citys.propTypes = {};

function Citys(props) {
  const [formData, setformData] = useState({
    isAgree: false,
    gender: "",
  });

  const [show , setShow] = useState (true);
  const handleChange = event => {
      const target = event.target
      const name = event.target.name
      const value = target.value
      setformData({
          ...formData,
          [name] : value
      })
      setShow(!show)

  }

  return (
    <form>
      <div >
        {/* <div onChange={this.setGender.bind(this)}> */}
        <input type="radio" value="oneWay" defaultChecked name="gender" onChange={handleChange} />
        <label>Một chiều / khứ hồi </label>
        
        <input type="radio" value="mulCity" name="gender"  onChange={handleChange} /> 
        <label>Nhiều thành phố </label>
        
      </div>
      {show ? <VerticalTabs /> : "nhiều thành phố"}
      
    </form>
  );
}


export default Citys;
