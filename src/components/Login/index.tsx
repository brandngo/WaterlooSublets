import React from "react";
import { Col, Row, Image } from "antd";
import AccountCard from "./AccountCard";
import logo from "../../imgs/logo.png";
import "../../utils/globalStyles.css";

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  return (
    <Row 
      align="middle" 
      justify="space-around"
      style={{
        backgroundColor: "#8184A8",
        height: "100vh",
      }}
    >
      <Col md={24} lg={12}>
        <img src={logo} width="50%" height="20%" />
      </Col>
      <Col>
        <AccountCard />
      </Col>
    </Row>
  );
};

export default Login;
