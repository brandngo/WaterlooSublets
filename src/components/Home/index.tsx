import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Listings from "./Listings";

const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <Listings

          ></Listings>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Home;
