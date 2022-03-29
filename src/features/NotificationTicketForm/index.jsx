import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../Home/InputField";
import { Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Select from "@mui/material/Select";
import { Form, FormControl } from "react-bootstrap";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./style.css";
// import hinh2 from "../resource/hinh2.jpg";

const useStyles = makeStyles({
  root: {
    // fontFamily: "Sansita Swashed cursive",
    fontFamily: "Sansita Swashed",
    paddingTop: 32,
  },
  avatar: {},
  title: {
    textAlign: "center",
    fontFamily: "Sansita Swashed",
  },
});

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

function ContactForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter title"),
    // email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      //   email: "",
      //   phone: "",
      //   description: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  const [value, setValue] = useState(new Date());
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const label1 = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className={classes.root}>
      {/* <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar> */}

      <Typography className={classes.title} component="h3" variant="h5">
        Tạo thông báo giá vé
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)} fullWidth>
        {/* <InputField name="fullName" label="Full Name" form={form} /> */}
        <Row>
          <Col sm={5}>
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
          {/* ------------------------------------------------------------------------------------- */}
          <Col sm={2}>
            <div className="notificationIcon">
              <label></label>
              <FlipCameraAndroidIcon />
            </div>
          </Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
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
        </Row>
        <br></br>
        <Row>
          <Col sm={5}>
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
          {/* ------------------------------------------------------------------------------------- */}
          <Col sm={2}></Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
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
        <h4>Ngày bay</h4>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Khứ hồi"
          />
        </FormGroup>
        <Row>
          <Col sm={6}>
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
          </Col>
          <Col sm={6}>
            <label>Ngày đến</label>

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
          </Col>
        </Row>
        <br></br>
        <h4>Lựa chọn ưu tiên</h4>
        <Row>
          <Col sm={6}>
            <h5>Khung giờ ưu tiên</h5>
          </Col>
          <Col sm={6}>
            <Switch {...label} defaultChecked />
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <label>Khởi hành</label>
            <br></br>
            <Checkbox {...label1} defaultChecked />
            <label>00:00 - 06:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>06:00 - 12:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>12:00 - 18:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>18:00 - 24:00</label>
          </Col>

          <Col sm={6}>
            <label>Chuyến về</label>
            <br></br>
            <Checkbox {...label1} defaultChecked />
            <label>00:00 - 06:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>06:00 - 12:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>12:00 - 18:00</label>
            <br></br>
            <Checkbox {...label1} />
            <label>18:00 - 24:00</label>
          </Col>
        </Row>

        <h4>Cài đặt thông báo</h4>
        <Row>
          <Col sm={6}>
            <div className="settingNotification">
              <NotificationsIcon />
              <label>Cài đặt thông báo</label>
            </div>
          </Col>
          <Col sm={6}>
            <input type="text" />
          </Col>
          <Col sm={6}>
            <div className="settingNotification">
              <AccountBalanceIcon />
              <label>Ngân sách</label>
            </div>
          </Col>
          <Col sm={6}>
            <input type="text" />
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default ContactForm;
