import { yupResolver } from "@hookform/resolvers/yup";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./style.css";
// import hinh2 from "../resource/hinh2.jpg";

const useStyles = makeStyles({
  root: {
    fontFamily: "system-ui",

    flex: 1,
  },
  avatar: {},
  title: {
    textAlign: "center",
    fontFamily: "system-ui",
    color: "rgb(1, 148, 243)",
  },
});

NotificationTicket.propTypes = {
  onSubmit: PropTypes.func,
};

function NotificationTicket(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter title"),
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

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };

  const [isCheckedTime, setIsCheckedTime] = useState(false);
  const handleOnChangeTime = () => {
    console.log(!isCheckedTime);
    setIsCheckedTime(!isCheckedTime);
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h4">
        T???o th??ng b??o gi?? v??
      </Typography>

      <form
        style={{ marginTop: "30px" }}
        onSubmit={form.handleSubmit(handleSubmit)}
        fullWidth
      >
        <Row>
          <Col sm={5}>
            <label>
              <b>T???</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">TP HCM, Vi???t Nam </option>
              <option value="2">???? N???ng, Vi???t Nam</option>
              <option value="3">H?? N???i, Vi???t Nam</option>
              <option value="3">???? L???t, Vi???t Nam</option>
              <option value="3">Nha Trang, Vi???t Nam</option>
              <option value="3">Ph?? Qu???c, Vi???t Nam</option>
              <option value="3">Hu???, Vi???t Nam</option>
              <option value="3">Vinh, Vi???t Nam</option>
            </Form.Select>
          </Col>

          <Col sm={2}>
            <div className="notificationIcon" style={{ marginTop: "20%" }}>
              <label></label>
              <FlipCameraAndroidIcon color="primary" />
            </div>
          </Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
            <label>
              <b>?????n</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">???? N???ng, Vi???t Nam </option>
              <option value="2">TP HCM, Vi???t Nam</option>
              <option value="3">H?? N???i, Vi???t Nam</option>
              <option value="3">???? L???t, Vi???t Nam</option>
              <option value="3">Nha Trang, Vi???t Nam</option>
              <option value="3">Ph?? Qu???c, Vi???t Nam</option>
              <option value="3">Hu???, Vi???t Nam</option>
              <option value="3">Vinh, Vi???t Nam</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={5}>
            <label>
              <b>S??? h??nh kh??ch</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>1 Ng?????i l???n , 0 Tr??? em , 0 Em b??</option>
              <option value="1">
                {/* <FaTimes /> */}
                Ng?????i l???n{" "}
              </option>
              <option value="2">Tr??? em</option>
              <option value="3">Em b??</option>
            </Form.Select>
          </Col>
          {/* ------------------------------------------------------------------------------------- */}
          <Col sm={2}></Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
            <label>
              <b>H???ng gh???</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>Ph??? th??ng</option>
              <option value="1">
                {/* <FaTimes /> */}
                Ph??? th??ng ?????c bi???t{" "}
              </option>
              <option value="2">Th????ng gia</option>
              <option value="3">H???ng nh???t</option>
            </Form.Select>
          </Col>
        </Row>

        <h4 style={{ color: "rgb(1, 148, 243)", marginTop: "80px" }}>
          Ng??y bay
        </h4>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Kh??? h???i"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </FormGroup>
        <Row>
          <Col sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Ng??y ??i"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Col>
          <Col sm={6}>
            {isChecked ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" Ng??y ?????n"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>
        <br></br>
        <h4 style={{ color: "rgb(1, 148, 243)" }}>L???a ch???n ??u ti??n</h4>
        <Row>
          <Col sm={6}>
            <label>Khung gi??? ??u ti??n</label>
          </Col>
          <Col sm={6}>
            <Switch
              {...label}
              checked={isCheckedTime}
              onChange={handleOnChangeTime}
              defaultChecked
            />
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            {isCheckedTime ? (
              <div>
                <label>Kh???i h??nh</label>
                <br></br>
                <Checkbox defaultChecked />
                <label>00:00 - 06:00</label>
                <br></br>
                <Checkbox />
                <label>06:00 - 12:00</label>
                <br></br>
                <Checkbox />
                <label>12:00 - 18:00</label>
                <br></br>
                <Checkbox />
                <label>18:00 - 24:00</label>
              </div>
            ) : (
              <span></span>
            )}
          </Col>

          <Col sm={6}>
            {isCheckedTime ? (
              <div>
                <label>Chuy???n v???</label>
                <br></br>
                <Checkbox defaultChecked />
                <label>00:00 - 06:00</label>
                <br></br>
                <Checkbox />
                <label>06:00 - 12:00</label>
                <br></br>
                <Checkbox />
                <label>12:00 - 18:00</label>
                <br></br>
                <Checkbox />
                <label>18:00 - 24:00</label>
              </div>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>

        <h4 style={{ color: "rgb(1, 148, 243)" }}>C??i ?????t th??ng b??o</h4>
        <Row>
          <Col sm={3}>
            <div className="settingNotification">
              <NotificationsIcon />
              <label className="settingNotification-title">
                C??i ?????t th??ng b??o
              </label>
            </div>
          </Col>
          <Col sm={3}>
            <input type="text" />
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row>
        <Row style={{ marginTop: "15px", marginBottom: "15px" }}>
          <Col sm={3}>
            <div className="settingNotification">
              <AccountBalanceIcon />
              <label className="settingNotification-title">Ng??n s??ch</label>
            </div>
          </Col>
          <Col sm={3}>
            <input type="text" />
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <button
            variant="contained"
            class="btn btn-primary"
            type="button"
            style={{  width: "25%", float: "right" }}
            onClick={() => alert("T???o th??ng b??o th??nh c??ng!")}
          >
            G???i th??ng b??o
          </button>
        </Row>
      </form>
    </div>
  );
}

export default NotificationTicket;
