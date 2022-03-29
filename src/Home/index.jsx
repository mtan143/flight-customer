import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import Select from "@mui/material/Select";
import { Form, FormControl } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import flag from "../resource/flag.png";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker";
import { date } from "yup";
import { BrowserRouter as Link } from "react-router-dom";
import hinh1 from "../resource/hinh1.jpg";
import hinh2 from "../resource/hinh2.jpg";
import hinh3 from "../resource/hinh3.jpg";
import hinh4 from "../resource/hinh4.jpg";
import hinh5 from "../resource/hinh5.jpg";
import hinh6 from "../resource/hinh6.jpg";
import yeucauhoantien from "../resource/yeucauhoantien.png";
import doilich from "../resource/doilich.png";
import hanhly from "../resource/hanhly.png";
import emailjs from "emailjs-com";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import Select from "react-select";
import {
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillContainer,
} from "react-icons/ai";

import HomeIcon from "@mui/icons-material/Home";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import LanguageIcon from "@mui/icons-material/Language";
import Contact from "../features/Contact";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NotificationTicket from "../features/NotificationTicket";
import NotificationElectric from "../features/NotificationElectric";
function Home(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Notification Ticket
  const [openTicket, setOpenTicket] = useState(false);

  const handleClickOpenTicket = () => {
    setOpenTicket(true);
  };

  const handleCloseTicket = () => {
    setOpenTicket(false);
  };

  //Vé điện tử của tôi
  const [openElectric, setOpenElectric] = useState(false);

  const handleClickOpenElectric = () => {
    setOpenElectric(true);
  };

  const handleCloseElectric = () => {
    setOpenElectric(false);
  };
  const [value, setValue] = useState(new Date());
  // const [age, setAge] = useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);}

  const [selectedDate, setSelectedDate] = useState(null);

  const Result = () => {
    return (
      <p>Your message has been successfully. i will contact with you soon</p>
    );
  };
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // "service_9yb75mn",
      .sendForm(
        "service_9yb75mn ",
        "template_zukmpme",
        e.current,
        "mLngXLE8LzsrUsMWE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="minhtan">
      <div className="flag">
        {/* <span>VN</span> */}
        <img src={flag} alt="flag" />
      </div>

      <div>
        <Container className="dinhdat">
          <Row
            className="dungvan"
            style={{
              backgroundColor: "transparent",
              borderTopLeftRadius: "100px",
            }}
          >
            <Col style={{ borderRight: "5px solid #ddd" }} sm={3}>
              <div className="menu">
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <Link to="/">
                        {" "}
                        <HomeIcon /> <p className="linkIconTopic">Home</p>{" "}
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <Link to="/">
                        {" "}
                        <FlightClassIcon />{" "}
                        <p className="linkIconTopic">Đặt chỗ cho tôi</p>{" "}
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <ConnectWithoutContactIcon />
                      <Link to="/">
                        <p className="linkIconTopic" onClick={handleClickOpen}>
                          Liên hệ chúng tôi{" "}
                        </p>
                      </Link>
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <LanguageIcon />
                      <Link to="/">
                        <p className="linkIconTopic" onClick={handleClickOpen}>
                          Quốc gia và ngôn ngữ{" "}
                        </p>
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <AirplanemodeActiveIcon />
                      <Link to="/">
                        <p
                          className="linkIconTopic"
                          onClick={handleClickOpenElectric}
                        >
                          Tình trạng chuyến bay
                        </p>
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <NotificationsActiveIcon />
                      <Link to="/">
                        <p
                          className="linkIconTopic"
                          onClick={handleClickOpenTicket}
                        >
                          Thông báo giá vé
                        </p>
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
              </div>
            </Col>

            <Col sm={9} className="formFlight">
              <Container>
                <Row>
                  <Col sm={4}>
                
                  <div>
                    <input type="radio" value="Male" name="gender" />
                    <label> Một chiều / Khứ hồi</label>
                  </div>
                  </Col>
                  <Col sm={4}>
                
                  <div >
                    <input type="radio" value="Female" name="gender" />
                    <label> Nhiều thành phố</label>
                  </div>
                  </Col>
                  <Col sm={4}></Col>
                
                </Row>
                <br></br>
                <Row >
                  <Col sm={4}>
                    <label>Từ</label>
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
                          label="DateTimePicker"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div>
                      {/* <label>Khứ hồi</label> */}
                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        className="option"
                      />
                      Khứ hồi
                      <DatePicker
                        className="formselectOption"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                      />
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Row>
                  <Col sm={4}></Col>
                  <Col sm={4}></Col>
                  <Col sm={4}>
                    {/* <label>Hạng ghế</label> */}
                    <button
                      variant="contained"
                      className="submit"
                      type="submit"
                    >
                      Tìm chuyến bay
                    </button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="topic">Cảm hứng du lịch</h1>
        <br></br>
        <br></br>

        <Container>
          <Row>
            <Col sm={4}>
              <img style={{ width: "100%" }} src={hinh1} alt="" />
            </Col>
            <Col sm={4}>
              <img
                style={{
                  width: "360px",
                  height: "255px",
                  marginBottom: "10px",
                }}
                src={hinh2}
                alt=""
              />
            </Col>
            <Col sm={4}>
              <img
                style={{ width: "100%", marginBottom: "10px", height: "255px" }}
                src={hinh3}
                alt=""
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col sm={4}>
              <img style={{ width: "100%" }} src={hinh4} alt="" />
            </Col>
            <Col sm={4}>
              <img
                style={{ width: "360px", height: "238px" }}
                src={hinh5}
                alt=""
              />
            </Col>
            <Col sm={4}>
              <img
                style={{ width: "100%", height: "238px" }}
                src={hinh6}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {/* <h1 className="topic">Contact for us</h1> */}

      <br></br>
      <br></br>
      <h1 className="topic">Tiện ích chuyến bay</h1>
      <br></br>
      <Container>
        <Row>
          <Col sm={4}>
            <div>
              {/* style={{ width: "215px" }} */}
              <button className="button">
                <img
                  src={yeucauhoantien}
                  alt=""
                  style={{
                    width: "165px",
                    height: "165px",
                    marginBottom: "10px",
                  }}
                />
                <p>Yêu cầu hoàn tiền</p>
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <button className="button" style={{ width: "215px" }}>
                <img
                  src={doilich}
                  alt=""
                  style={{
                    width: "165px",
                    height: "165px",
                    marginBottom: "10px",
                  }}
                />
                <p>Đổi lịch bay</p>
              </button>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <button className="button" style={{ width: "215px" }}>
                <img
                  src={hanhly}
                  alt=""
                  style={{
                    width: "165px",
                    height: "165px",
                    marginBottom: "10px",
                  }}
                />
                <p>Mua thêm hành lý</p>
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <Contact />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {/* Notification Ticket */}
      <Dialog
        disableEscapeKeyDown
        open={openTicket}
        onClose={handleCloseTicket}
      >
        <DialogContent>
          <NotificationTicket />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTicket}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Vé điện tử của tôi */}
      <Dialog
        disableEscapeKeyDown
        open={openElectric}
        onClose={handleCloseElectric}
      >
        <DialogContent>
          <NotificationElectric />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseElectric}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Contact for me  */}
      {/* <Dialog disableEscapeKeyDown open={openContact} onClose={handleClose}>
        <DialogContent>
          <Contact />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
export default Home;