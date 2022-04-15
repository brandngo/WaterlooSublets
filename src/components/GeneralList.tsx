import React from "react";
import { Row, Col, Typography, Card, List, Input } from "antd";

const { Title } = Typography;

interface GeneralListProps {
  height: string | number;
  children?: any;
}

const GeneralList: React.FC<GeneralListProps> = ({ height, children }) => {
  const SearchHeader = (
    <Row justify="space-between" align="bottom">
      <Col>
        <Title level={3} style={{ color: "#F7F6E7" }}>
          Listings
        </Title>
      </Col>
      <Col>
        <Input.Search></Input.Search>
      </Col>
    </Row>
  );

  return (
    <Card
      size="small"
      style={{ borderRadius: "24px", backgroundColor: "#314E52" }}
      title={SearchHeader}
    >
      <List style={{ height, overflowY: "auto" }}>{children}</List>
    </Card>
  );
};

export default GeneralList;
