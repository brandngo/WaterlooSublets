import React, { useState } from "react";
import Listings from "./Listings";
import Map from "./Map";
import "./index.css";
import { Card, Col, Row, Typography } from "antd";
import { listData } from "../../utils/ddata"; // dummy data

const { Title } = Typography;

const Home = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const addrs = (data): any[] => {
    return data.map((obj) => `${data.street}, ${data.city}, ON`);
  };

  /*

        <Row>
        <Col style={{ width: "45%"}}>
          <Card size="small" style={{ borderRadius: "24px", backgroundColor: "#314E52" }}>
            <Listings data={listData} setActive={setActiveCard} />
          </Card>
        </Col>
        <Col style={{ width: "55%" }}>
          <Card size="small" >
            <Map data={listData} active={activeCard} />
          </Card>
        </Col>
      </Row>


    */

  return (
    <div
      style={{
        backgroundColor: "#E7E6E1",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col>
          <Title>WaterlooSublets</Title>
        </Col>
        <Col>
          <Col></Col>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default Home;
