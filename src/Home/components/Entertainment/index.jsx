import React from 'react';
import PropTypes from 'prop-types';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


Entertainment.propTypes = {
    
};

function Entertainment(props) {
    return (
        <div style={{fontFamily: 'system-ui'}}  >
             <form>
        <Container>
          <Row >
            <Col sm={4}>
              <p>Hoạt động tham quan & giải trí tại TPHCM</p>
              <p>Hoạt động tham quan & giải trí tại Hội An</p>
              <p>Hoạt động tham quan & giải trí tại Đà Nẵng</p>
              <p>Hoạt động tham quan & giải trí tại Nha Trang</p>
              <p>Hoạt động tham quan & giải trí tại Đà Lạt</p>
             
            </Col>
            <Col sm={4}>
              <p>Hoạt động Tham quan & Giải trí tại Hà Nội</p>
              <p> Hoạt động Tham quan & Giải trí tại Phú Quốc</p>
              <p> Hoạt động Tham quan & Giải trí tại Sa Pa</p>
              <p> Hoạt động Tham quan & Giải trí tại Hà Giangg</p>
              <p> Hoạt động Tham quan & Giải trí tại Ninh Bình</p>
    
            </Col>
            <Col sm={4}>
              <p>Hoạt động Tham quan & Giải trí tại Singapore</p>
              <p> Hoạt động Tham quan & Giải trí tại Thái Lanp</p>
              <p> Hoạt động Tham quan & Giải trí tại Malaysia</p>
              <p> Hoạt động Tham quan & Giải trí tại Hàn Quốc</p>
              <p> Hoạt động Tham quan & Giải trí tại Nhật Bản</p>
            
            </Col>
          
          </Row>

        </Container>
      </form>
        </div>
    );
}

export default Entertainment;