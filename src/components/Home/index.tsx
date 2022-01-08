import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Listings from "./Listings";
import { listData } from "../../utils/ddata"

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={5}>
          <Listings
            data={listData}
          />
        </Col>
        <Col xs={7}>

        </Col>
      </Row>
    </div>
  );
}

export default Home;
