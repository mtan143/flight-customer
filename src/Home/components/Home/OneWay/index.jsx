import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import React from "react";
import { Container, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import AdultQuanlity from "../AdultQuanlity";
import { useState } from "react";
import h1 from "../../../../resource/h1.jpg";
import NumericInput from "react-numeric-input";
import PeopleIcon from "@mui/icons-material/People";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import "./style.css";
import { Typography } from "@mui/material";
import InDecrease from "../InDecrease";

OneWay.propTypes = {};

function OneWay(props) {
  // const [count, setCount] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };

  const [value, setValue] = useState(new Date());
  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <label>Từ</label>

            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1"> Đà Nẵng, Việt Nam </option>
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
            <InDecrease />
          </Col>
        </Row>

        <br></br>
        <Row>
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
          <Col sm={4}>
            <div className="topping">
              <div className="khuHoi">
                <input
                  type="checkbox"
                  value="khuHoi"
                  name="khuHoi"
                  className="option"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                <label style={{ paddingLeft: "5%" }}> Khứ hồi </label>
              </div>
              {isChecked ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    color="primary"
                    renderInput={(props) => <TextField {...props} />}
                    label=" "
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              ) : (
                <span></span>
              )}
            </div>
          </Col>
          <Col sm={4}>
            <label>Hạng ghế</label>
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

        <Row>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}>
            {/* <label>Hạng ghế</label> */}
            <button variant="contained" class="btn btn-primary" type="submit" style={{width:"60%", marginLeft:"52%"}}>
              Tìm chuyến bay
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OneWay;
