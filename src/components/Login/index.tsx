import React from 'react'
import { Col, Row, Image } from "antd"
import AccountCard from "./AccountCard"
import logo from "../../imgs/logo.png"

interface loginProps {}

const Login: React.FC<loginProps> = ({}) => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh"}}>
      <Col span={12}>
        <Image 
          src={logo}
          width="60%"
        />
      </Col>
      <Col span={12}>
        <AccountCard />
      </Col>
    </Row>
  );
}

export default Login