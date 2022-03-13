import React from "react";
import { Col, Row, Image } from "antd";
import AccountCard from "./AccountCard";
import logo from "../../imgs/logo.png";
import "../../utils/globalStyles.css";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  return (
    <div
      className="center-container"
      style={{
        backgroundColor: "#8184A8",
        height: "100vh",
        flex: 1,
      }}
    >
      <div>
        <img src={logo} width="80%" />
      </div>
      <div style={{ marginLeft: "120px" }}>
        <AccountCard />
      </div>
    </div>
  );
};

export default Login;
