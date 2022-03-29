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

NotificationElectricForm.propTypes = {
  onSubmit: PropTypes.func,
};

function NotificationElectricForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter title'),
    email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  });
  const form = useForm({
    defaultValues: {
      fullName : "",
    
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
        <LockOutlined></LockOutlined>
      
        {/* {/* <img
                style={{ width: "360px", height: "238px" }}
                src={hinh5}
                alt=""
              /> */}
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
              Vé điện tử của tôi
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {/* <InputField name="fullName" label="Full Name" form={form} /> */}
        <h4>Chuyến bay khứ hồi</h4>
       
      </form>
    </div>
  );
}

export default NotificationElectricForm;
