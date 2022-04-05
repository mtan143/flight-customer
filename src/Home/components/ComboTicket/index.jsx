import React from 'react';
import PropTypes from 'prop-types';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


ComboTicket.propTypes = {
    
};

function ComboTicket(props) {
    return (
        <div>
             <form>
        <Container>
          <Row >
            <Col sm={4}>
              <p>Combo du lịch TP Hồ Chí Minh</p>
              <p>Combo du lịch Hà Nội</p>
             
            </Col>
            <Col sm={4}>
              <p>Combo du lịch Đà Nẵng</p>
              <p> Combo du lịch Singapore</p>
            
            </Col>
            <Col sm={4}>
              <p>Combo du lịch Nha Trang</p>
              <p> Combo du lịch Phú Quốc</p>
            
            </Col>
         
          </Row>

        </Container>
      </form>
        </div>
    );
}

export default ComboTicket;