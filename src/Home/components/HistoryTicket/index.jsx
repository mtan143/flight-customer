import React from "react";
import PropTypes from "prop-types";
import "./style.css";

HistoryTicket.propTypes = {};

function HistoryTicket(props) {
  return (
    <div className="historyTicket" style={{fontFamily: 'system-ui'}}>
      <label>Email / SĐT :</label>
      <input
        className="input"
        type="text"
        id="fname"
        name="firstname"
        placeholder="Nhập email hoặc SĐT"
        width="100%"
      />
      <button variant="contained" className="btn btn-primary" type="submit" style={{width:"30%", marginTop: "20%"}}>
       Tìm lịch sử đặt vé
      </button>
    </div>
  );
}

export default HistoryTicket;
