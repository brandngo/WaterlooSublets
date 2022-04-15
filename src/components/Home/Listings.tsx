import React from "react";
import { List, Row, Col, Image, Card, Input, Typography } from "antd";
import GeneralList from "../GeneralList";

const { Title } = Typography;

interface ListingsProps {
  data: Array<any>;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
}

const Listings: React.FC<ListingsProps> = ({ data, setActive }) => {
  console.table(data);

  return (
    <GeneralList height="86vh">
      {data.map((item, index) => (
        <List.Item actions={[]} key={item.id} onClick={() => setActive(index)}>
          <div>
            <Row>
              <Col>
                <Image src={item.picture} height="120px" />
              </Col>
              <Col>
                <Row>{`${item.rent} / Month`}</Row>
                <Row>{`${item.street}, ${item.city}`}</Row>
                <Row>{`Duration: ${item.duration} Months`}</Row>
                <Row></Row>
              </Col>
            </Row>
          </div>
        </List.Item>
      ))}
    </GeneralList>
  );
};

export default Listings;
