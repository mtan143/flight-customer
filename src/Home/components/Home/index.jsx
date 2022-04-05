import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { useState } from "react";

Home.propTypes = {};

function Home(props) {
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
            <div>
              <input type="radio" value="Male" name="gender" />
              <label> Một chiều / Khứ hồi</label>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <input type="radio" value="Female" name="gender" />
              <label> Nhiều thành phố</label>
            </div>
          </Col>
          <Col sm={4}></Col>
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
            <label>Số hành khách</label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>1 Người lớn , 0 Trẻ em , 0 Em bé</option>
              <option value="1">
                {/* <FaTimes /> */}
                Người lớn{" "}
              </option>
              <option value="2">Trẻ em</option>
              <option value="3">Em bé</option>
            </Form.Select>
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
              {/* <label>Khứ hồi</label> */}
              <div className="khuHoi">
                <input
                  type="checkbox"
                  value="khuHoi"
                  name="khuHoi"
                  className="option"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                Khứ hồi
              </div>
              {/* <DatePicker
                        className="formselectOption"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                      /> */}
              {isChecked ? (
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
            <button variant="contained" className="submit" type="submit">
              Tìm chuyến bay
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
