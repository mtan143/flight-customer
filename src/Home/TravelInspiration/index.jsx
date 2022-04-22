import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "react-datepicker";
import h1 from "../../resource/h1.jpg";
import h2 from "../../resource/h2.jpg";
import h3 from "../../resource/h3.jpg";
import h4 from "../../resource/h4.jpg";
import h5 from "../../resource/h5.jpg";
import h6 from "../../resource/h6.jpg";


TravelInspiration.propTypes = {
    
};

function TravelInspiration(props) {
    return (
        <div>
             <div>
       

       <br></br>
       <br></br>
       <br></br>
       <h1 className="topic">Cảm hứng du lịch</h1>
       <br></br>
       <br></br>

       <Container>
         <Row>
           <Col sm={4}>
             <img style={{borderRadius:"10px", margin:"5% 5%"}} src={h1} alt="" />
           </Col>
           <Col sm={4}>
             <img style={{borderRadius:"10px" , margin:"5% 5%"}}
              
               src={h2}
               alt=""
             />
           </Col>
           <Col sm={4}>
             <img style={{borderRadius:"10px" , margin:"5% 5%"}}
               
               src={h3}
               alt=""
             />
           </Col>
         </Row>
         <Row >
           <Col sm={4}>
          
             <img  style={{borderRadius:"10px" , margin:"5% 5%"}} src={h4} alt="" />
           </Col>
           <Col sm={4}>
             <img style={{borderRadius:"10px" , margin:"5% 5%"}}
               
               src={h5}
               alt=""
             />
           </Col>
           <Col sm={4}>
             <img  style={{borderRadius:"10px" ,margin:"5% 5%"}}
               src={h6}
               alt=""
             />
           </Col>
         </Row>
       </Container>
     </div>
        </div>
    );
}

export default TravelInspiration;