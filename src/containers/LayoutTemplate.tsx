import { Layout, Typography, Row, Col } from "antd";
import React from "react";
import "../utils/globalStyles.css";
import {
  SettingOutlined,
  InboxOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { NavigateFunction } from "react-router-dom";
import WatchlistDropdown from "../components/Toolbar/WatchlistDropdown";
import ProfileDropdown from "../components/Toolbar/ProfileDropdown";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface LayoutTemplateProps {
  children?: any;
  navigate: NavigateFunction;
}

interface NavItemProps {
  link?: string;
  children?: any;
}

const NavItem: React.FC<NavItemProps> = ({ link = "", children }) => {
  return (
    <a href={link} style={{ fontSize: "2em" }}>
      {children}
    </a>
  );
};

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({
  navigate,
  children,
}) => {
  return (
    <Layout>
      <div
        style={{
          padding: "0 10vw",
          backgroundColor: "#E7E6E1",
          height: "100vh",
        }}
      >
        <Header style={{ backgroundColor: "#E7E6E1" }}>
          <nav>
            <Row justify="space-between" align="middle">
              <Title
                style={{ fontSize: "1.8em" }}
                className="secondary-color"
                onClick={() => navigate("/explore")}
              >
                WaterlooSublets
              </Title>
              <Row gutter={70} align="middle">
                <Col>
                  <WatchlistDropdown />
                </Col>

                <Col>
                  <NavItem link="">
                    <SettingOutlined />
                  </NavItem>
                  <NavItem link="">
                    <InboxOutlined />
                  </NavItem>
                  <NavItem link="">
                    <BellOutlined />
                  </NavItem>
                </Col>

                <Col>
                  <ProfileDropdown navigate={navigate} />
                </Col>
              </Row>
            </Row>
          </nav>
        </Header>
        <Content>{children}</Content>
      </div>
    </Layout>
  );
};

/*


*/

export default LayoutTemplate;
