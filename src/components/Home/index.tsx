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

  // if mobile then only show list and collapsed nav

  return (
      <Row>
        <Col style={{ width: "45%" }}>
          <Listings data={listData} setActive={setActiveCard} />
        </Col>
        <Col style={{ width: "55%" }}>
          <Card size="small" >
            <Map data={listData} active={activeCard} />
          </Card>
        </Col>
      </Row>
  );
};

export default Home;
