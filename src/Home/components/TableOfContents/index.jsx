import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

index.propTypes = {};

function index(props) {
  return (
    <div>
      <form>
        <Container>
          <Row >
            <Col sm={3}>
              <p>Vé máy bay đi Đà Nẵng</p>
              <p>Vé máy bay đi Phú Quốc</p>
              <p>Vé máy bay đi Nha Trang</p>
              <p>Vé máy bay đi Hà Nội</p>
              <p>Vé máy bay đi Đà Lạt</p>
              <p>Vé máy bay đi Hải Phòng</p>
            </Col>
            <Col sm={3}>
              <p>Vé máy bay Hà Nội - Sài Gòn</p>
              <p> Vé máy bay Hà Nội - Phú Quốc</p>
              <p> Vé máy bay Hà Nội - Đà Nẵng</p>
              <p> Vé máy bay Hà Nội - Nha Trang</p>
              <p> Vé máy bay Hà Nội - Đà Lạt</p>
              <p> Vé máy bay đi Sài Gòn</p>
            </Col>
            <Col sm={3}>
              <p>Vé máy bay Sài Gòn - Hà Nội</p>
              <p> Vé máy bay Sài Gòn - Đà Nẵng</p>
              <p> Vé máy bay Sài Gòn - Phú Quốc</p>
              <p> Vé máy bay Sài Gòn - Nha Trang</p>
              <p> Vé máy bay Sài Gòn - Đà Lạt</p>
              <p> Vé máy bay đi Singapore</p>
            </Col>
            <Col sm={3}>
              <p>Vé máy bay Đà Nẵng - Hà Nội </p>
              <p>  Vé máy bay Đà Nẵng - Sài Gòn </p>
              <p>  Vé máy bay HCM - Bangkok</p>
              <p>  Vé máy bay HCM - Singaporea </p>
              <p>  Vé máy bay Hà Nội - Bangkok </p>
              <p>  Vé máy bay đi Bangkok</p>
            </Col>
          </Row>

        </Container>
      </form>
    </div>
  );
}

export default index;
