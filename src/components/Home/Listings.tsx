import React from 'react'
import {ListGroup, Row, Col, Image} from 'react-bootstrap'

interface ListingsProps {
  data: Array<any>;
}

const Listings: React.FC<ListingsProps> = ({data}) => {
  console.log(data)
  return (
    <ListGroup>
      {data.map((item) => 
        <ListGroup.Item
          action
          as="div"
          key={item.id}
        >
          <div>
            <Row>
              <Col>
                <Image 
                  fluid
                  src={item.picture}
                  height="120px"
                />
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
      )}
    </ListGroup>
  );
}

export default Listings