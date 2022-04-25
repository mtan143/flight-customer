import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { Container, Grid, Paper } from "@mui/material";
import vietjet from "../../../resource/vietjet.png";
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

DetailTicket.propTypes = {};

function DetailTicket(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <h4>Điều kiện</h4>

            <div style={{ display: "flex", marginLeft: "11%" }}>
              <img src={vietjet} alt="" style={{ width: "10%" , marginLeft:"-15%"}} />

              <h5>VietJet Air</h5>
            </div>
            <div>
                <p>TP HCM - Đà Nẵng</p>
                <p style={{color:"#ddd  "}}>Khuyến mãi</p> 
            </div>
            <div>
                <MoneyOffIcon/> <span><b>Không hoàn tiền</b></span>  <i className="fas fa-info-circle"> </i> 
             </div>
             <div>
                 <CalendarMonthIcon /> <span style={{color:"green"}}><b>Đổi lịch có sẵn</b></span>  <i className="fas fa-info-circle"> </i> 
             </div>
             <div>
                 <ControlPointIcon />   <span><b>Đăng nhập để nhận điểm thưởng khi đặt chỗ</b></span> 
             </div>
          </Col>


          <Col sm={6}>
              <Row>
                  <Col sm={6}>
                      <span>Vé người lớn cơ bản (x1)</span>
                  </Col>
                  <Col sm={6}>
                  <span>752.120 VND</span>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <span style={{color:"#ddd  "}} >Thuế</span>
                  </Col>
                  <Col sm={6}>
                  <span style={{color:"#ddd  "}}>Đã bao gồm</span>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <span style={{color:"#ddd  "}} >Tổng giá trị thông thường</span>
                  </Col>
                  <Col sm={6}>
                  <span style={{color:"#ddd  "}}>752.120 VND</span>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <span style={{color:"green  "}} >Tiết kiệm</span>
                  </Col>
                  <Col sm={6}>
                  <span style={{color:"green "}}>-4.000 VND</span>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6}>
                      <span style={{color:"#ddd  "}} ><b>Bạn trả</b></span>
                  </Col>
                  <Col sm={6}>
                  <span style={{color:"#ddd  "}}>752.120 VND</span>
                  </Col>
              </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailTicket;
