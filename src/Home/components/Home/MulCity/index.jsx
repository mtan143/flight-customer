import React from "react";
import PropTypes from "prop-types";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { Container, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import AdultQuanlity from "../AdultQuanlity";
import { useState } from "react";
import  Link from "react-router-dom";
import InDecrease from "../InDecrease";

MulCity.propTypes = {};

function MulCity(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };

  const [value, setValue] = useState(new Date());
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <label>Từ</label>

            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">Đà Nẵng, Việt Nam </option>
              <option value="2">TP HCM, Việt Nam</option>
              <option value="3">Hà Nội, Việt Nam</option>
              <option value="3">Đà Lạt, Việt Nam</option>
              <option value="3">Nha Trang, Việt Nam</option>
              <option value="3">Phú Quốc, Việt Nam</option>
              <option value="3">Huế, Việt Nam</option>
              <option value="3">Vinh, Việt Nam</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <label>Đến</label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
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
          </Col>
          <Col sm={4}>
            <div>
              <label>Ngày đi</label>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" "
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={4}>
            <label>Từ</label>

            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">Đà Nẵng, Việt Nam </option>
              <option value="2">TP HCM, Việt Nam</option>
              <option value="3">Hà Nội, Việt Nam</option>
              <option value="3">Đà Lạt, Việt Nam</option>
              <option value="3">Nha Trang, Việt Nam</option>
              <option value="3">Phú Quốc, Việt Nam</option>
              <option value="3">Huế, Việt Nam</option>
              <option value="3">Vinh, Việt Nam</option>
            </Form.Select>
          </Col>
          <Col sm={4}>
            <label>Đến</label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
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
          </Col>
          <Col sm={4}>
            <div>
              <label>Ngày đi</label>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" "
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col sm={8}>
           <InDecrease />
          </Col>
          <br></br>
          <Col sm={4}>
            <label><b>Hạng ghế</b> </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>Phổ thông</option>
              <option value="1">
                {/* <FaTimes /> */}
                Phổ thông đặc biệt{" "}
              </option>
              <option value="2">Thương gia</option>
              <option value="3">Hạng nhất</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
            <Col sm={8}>
                <span>Chuyến bay nhiều thành phố là gì? <a href="https://www.traveloka.com/vi-vn/flight/multi-city">Tìm hiểu thêm tại đây</a></span>
            </Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}>
            {/* <label>Hạng ghế</label> */}
            <button variant="contained" className="submit" type="submit">
              Tìm chuyến bay
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MulCity;
