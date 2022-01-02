import React from 'react'
import {ListGroup, Row, Col} from 'react-bootstrap'

interface ListingsProps {
  listItems: Array<any>;
}

const Listings: React.FC<ListingsProps> = ({listItems}) => {
  return (
    <ListGroup>
      {listItems.map((item) => {
        <ListGroup.Item
          action
          as="div"
        >
          <div>
            <Row>
              <Col>
                image
              </Col>
              <Col>
                <Row>
                  {item.rentPrice}
                </Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </ListGroup.Item>  
      })}
    </ListGroup>
  );
}

export default Listings