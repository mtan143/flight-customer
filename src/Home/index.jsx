import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"
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
// import flag from "../resource/flag.png";

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
import VerticalTabs from "./VerticalTabs";
import BasicTabs from "./BasicTabs";





function Home(props) {

   
  

  // const [isChecked , setIsChecked] = useState(false);

  // const handleOnChange = () => {
  //   console.log(!isChecked);
  //   setIsChecked(!isChecked);
    
    
  // }

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
  // const [value, setValue] = useState(new Date());
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


        <VerticalTabs />

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
                  <h1 className="topic" >Bạn muốn khám phá điều gì?</h1>
                  <BasicTabs />
      
      

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
