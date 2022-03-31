import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

index.propTypes = {};

function index(props) {
  return (
    <div>
      <Form.Select aria-label="Default select example" className="formselect">
        {/* <option>Open this select menu</option> */}
        <option value="1">
          {/* <FaTimes /> */}
          Đà Nẵng, Việt Nam{" "}
        </option>
        <option value="2">TP HCM, Việt Nam</option>
        <option value="3">Hà Nội, Việt Nam</option>
        <option value="3">Đà Lạt, Việt Nam</option>
        <option value="3">Nha Trang, Việt Nam</option>
        <option value="3">Phú Quốc, Việt Nam</option>
        <option value="3">Huế, Việt Nam</option>
        <option value="3">Vinh, Việt Nam</option>
      </Form.Select>
    </div>
  );
}

export default index;
