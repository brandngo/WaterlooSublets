import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";

const { Header, Content, Footer } = Layout;

interface LayoutTemplateProps {
  children?: any;
}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
      <Content>{children}</Content>
      <Footer></Footer>
      <Outlet />
    </Layout>
  );
};

export default LayoutTemplate;
