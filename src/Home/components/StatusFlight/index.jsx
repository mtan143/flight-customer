import { InvertColorsOffRounded } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
// import { default as React, default as React } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { Icon } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./style.css";
import { red } from "@mui/material/colors";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VerticalTabs from "../../VerticalTabs";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


StatusFlight.propTypes = {};

function StatusFlight(props) {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <div>
        <Row>
          <Col sm={12}>
            <div>
              <AirplanemodeActiveIcon />
              <label for="lname" style={{marginLeft:"15px"}}>Mã chuyến bay :</label>

              <input
                className="input"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Nhập mã chuyến bay"
                width="100%"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <div className="dayGo">
            

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" Ngày đi"
                  width="100%"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
          </Col>
        </Row>
        {/* <div className="notification">
          <PriorityHighIcon sx={{ color: red[500] }} />
          <p className="notificationName">
            Thông tin chuyến bay chỉ mang tính chất tham khảo
          </p>
        </div> */}
        <div>
        <Alert severity="error" style={{paddingLeft:"35%" , marginTop:"20px"}} >Thông tin chuyến bay chỉ mang tính chất tham khảo</Alert>
        </div>
       
    
        <button variant="contained"  className="btn btn-primary" type="submit" >
          Tìm tình trạng chuyến bay 
        </button>
      </div>
    </div>
  );
}

export default StatusFlight;
