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
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "react-datepicker";
import { BrowserRouter as Link } from "react-router-dom";
import Contact from "../features/Contact";
import NotificationElectric from "../features/NotificationElectric";
import NotificationTicket from "../features/NotificationTicket";
import flag from "../resource/flag.png";

import h1 from "../resource/h1.jpg";
import h2 from "../resource/h2.jpg";
import h3 from "../resource/h3.jpg";
import h4 from "../resource/h4.jpg";
import h5 from "../resource/h5.jpg";
import h6 from "../resource/h6.jpg";
import h7 from "../resource/h7.jpg";
import h8 from "../resource/h8.jpg";
import h9 from "../resource/h9.jpg";
import h10 from "../resource/h10.jpg";
import "./style.css";





function Home(props) {

   
  // const setGender=(e) => {
  //   console.log(e.target.value);
  // }

  const [isChecked , setIsChecked] = useState(false);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
    
    
  }

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
                        <HomeIcon color="primary" /> <p className="linkIconTopic">Home</p>{" "}
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <Link to="/">
                        {" "}
                        <FlightClassIcon color="primary" />{" "}
                        <p className="linkIconTopic">Đặt chỗ cho tôi</p>{" "}
                      </Link>{" "}
                    </div>
                  </Row>
                </div>
                <div className="link">
                  <Row>
                    <div className="linkIcon">
                      <ConnectWithoutContactIcon color="primary" />
                      <Link style={{cursor:'pointer'}} to="/">
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
                      <LanguageIcon color="primary" />
                      <Link to="/" >
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
                      <AirplanemodeActiveIcon color="primary" />
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
                      <NotificationsActiveIcon color="primary" />
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
                     
                      <option value="1">
                      
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
                    <div className="topping" >
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
                      {isChecked ? <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => <TextField {...props} />}
                          label=" "
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </LocalizationProvider> : <span></span>}
                      
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
              <img src={h1} alt="" />
            </Col>
            <Col sm={4}>
              <img
               
                src={h2}
                alt=""
              />
            </Col>
            <Col sm={4}>
              <img
                
                src={h3}
                alt=""
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col sm={4}>
           
              <img  src={h4} alt="" />
            </Col>
            <Col sm={4}>
              <img
                
                src={h5}
                alt=""
              />
            </Col>
            <Col sm={4}>
              <img  
                src={h6}
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
      <h1 className="topic">Tại sao lại đặt chỗ ở Traveloka ?</h1>
      <br></br>
      <Container>
        <Row className="flightFacilities">
          <Col sm={3}>
            <div>
              {/* style={{ width: "215px" }} */}
          
                <img
                  src={h7}
                  alt=""
                  // style={{
                  //   width: "165px",
                  //   height: "165px",
                  //   marginBottom: "10px",
                  // }}
                />
                <h4>Giải pháp du lịch hoàn thiện</h4>
                <p>Giải pháp toàn diện - giúp bạn tìm chuyến bay và khách sạn khắp Việt Nam và Đông Nam Á một cách tiết kiệm.</p>
              
            </div>
          </Col>
          <Col sm={3}>
            <div>
              {/* <button className="button" > */}
                <img
                  src={h8}
                  alt=""
                 
                
                />
                <h4>Giá rẻ mỗi ngày</h4>
                <p>Giá bạn thấy là giá bạn trả! Dễ dàng so sánh khi không cần phải trả thêm chi phí ẩn! </p>
              {/* </button> */}
            </div>
          </Col>
          <Col sm={3}>
            <div>
              {/* <button className="button" style={{ width: "215px" }}> */}
                <img
                  src={h9}
                  alt=""
                 
                />
                <h4>Phương thức thanh toán an toàn và linh hoạt</h4>
                <p>Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch. </p>
              {/* </button> */}
            </div>
          </Col>

          <Col sm={3}>
            <div>
              {/* <button className="button" style={{ width: "215px" }}> */}
                <img
                  src={h10}
                  alt=""
                 
                />
                <h4>Hỗ trợ khách hàng 24/7</h4>
                <p>Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé </p>
              {/* </button> */}
            </div>
          </Col>
        </Row>
      </Container>

      

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          <Contact />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Thoát</Button>
          <Button onClick={handleClose}>Gửi</Button> */}
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

      
    </div>
  );
}
export default Home;
