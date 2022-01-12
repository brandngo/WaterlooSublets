import React from "react";
import { ListGroup, Row, Col, Image } from "react-bootstrap";

interface ListingsProps {
  data: Array<any>;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}

const Listings: React.FC<ListingsProps> = ({ data, setActive }) => {
  console.log(data);
  return (
    <ListGroup style={{ height: "100vh", overflowY: "auto" }}>
      {data.map((item, index) => (
        <ListGroup.Item
          action
          as="div"
          key={item.id}
          onClick={() => setActive(index)}
        >
          <div>
            <Row>
              <Col>
                <Image fluid src={item.picture} height="120px" />
              </Col>
              <Col>
                <Row>{`${item.rent} / Month`}</Row>
                <Row>{`${item.street}, ${item.city}`}</Row>
                <Row>{`Duration: ${item.duration} Months`}</Row>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Listings;
