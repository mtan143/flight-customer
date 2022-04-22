import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import flag from "../resource/flag.png" ;
import flag from "../../resource/flag.png";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div>
      <div >
        <Box sx={{ flexGrow: 1 }} style={{zIndex:1090}}  >
          <AppBar position="static" style={{backgroundColor:"white"}} >
            <Toolbar className="navBar" style={{ color: "black", backgroundColor: "white" ,width:1200 , margin:"auto" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ color: "blue" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Traveloka
              </Typography>
              <div>
                <AirlineSeatReclineNormalIcon color="primary" />
                <Button color="inherit">Đặt chỗ của tôi</Button>
              </div>

              <Button color="inherit">Đăng nhập</Button>
              <Button color="inherit">Đăng ký</Button>
              <img src={flag} alt="flag" />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
