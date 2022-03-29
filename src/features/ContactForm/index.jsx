import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../Home/InputField";
import { Avatar,  Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Button } from 'react-bootstrap';
// import hinh2 from "../resource/hinh2.jpg";
import { useState } from "react";
import emailjs from "emailjs-com";

const useStyles = makeStyles({
    root:{
        fontFamily: 'Sansita Swashed cursive',
        // font-family: 'Sansita Swashed', cursive;
        paddingTop:32,
    },
    avatar:{

    },
    title:{
        textAlign:'center'
    },
});

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

function ContactForm(props) {
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



  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter title'),
    email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  });
  const form = useForm({
    defaultValues: {
      fullName : "",
      email: "",
      phone: "",
      description: "",
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

  return (
    <div className={classes.root}>
        
      <Avatar className={classes.avatar}> 
        {/* <LockOutlined></LockOutlined> */}
      
        {/* {/* <img
                style={{ width: "360px", height: "238px" }}
                src={hinh5}
                alt=""
              /> */}
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Liên hệ với chúng tôi
      </Typography>

      {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="phone" label="Phone" form={form} />
        <textarea style={{ width: "100%" }} rows="8" name="description" label="How can i help you?" form={form} />
        <Button variant="contained" color="primary" >
            Submit
        </Button>
      </form> */}
      <form className="contactforus" onSubmit={sendEmail} on>
        <div>
          <label>
            {" "}
           Họ và tên:{" "}
            <input
              className="inputContact"
              style={{ width: "100%" }}
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </label>
          <br />
          <label>
            Email:{" "}
            <input
              className="inputContact"
              style={{ width: "100%" }}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <br />
          <label>
            Số điện thoại:{" "}
            <input
              className="inputContact"
              style={{ width: "100%" }}
              type="text"
              name="phone"
              placeholder="Phone"
              required
            />
          </label>
          <br />
          <label>
            Chúng tôi có thể giúp gì cho bạn?:{" "}
            <textarea
              className="inputContact"
              style={{ width: "100%" }}
              id="message"
              rows="8"
              placeholder="Desription"
              required
            />
          </label>
          <br />
          <button type="submit">Gửi</button>
          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
