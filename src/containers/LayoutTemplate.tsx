import { Layout, Typography, Row, Col } from "antd";
import React from "react";
import { SettingOutlined, InboxOutlined, BellOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import WatchlistDropdown from "../components/Toolbar/WatchlistDropdown";
import ProfileDropdown from "../components/Toolbar/ProfileDropdown"

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

interface LayoutTemplateProps {
  children?: any;
}

interface NavItemProps {
  link?: string;
  children?: any;
}

const NavItem: React.FC<NavItemProps> = ({ link="", children }) => {

  return (
    <a href={link} style={{ fontSize: "2em" }}>
      {children}
    </a>
  )
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => {
  
  return (
    <Layout >
      <div style={{ padding: "0 10vw", backgroundColor: "#E7E6E1" }}>
        <Header style={{backgroundColor: "#E7E6E1"}}>
          <nav>
            <Row justify="space-between" align="middle">
              <Title style={{fontSize: "24px"}}>WaterlooSublets</Title>
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
                  <ProfileDropdown />
                </Col>
              </Row>
            </Row>
          </nav>

        </Header>
        <Content>{children}</Content>
        <Footer></Footer>
      </div>
    </Layout>
  );
};

/*


*/

export default LayoutTemplate;
