import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";

const { Header, Content, Footer } = Layout;

interface LayoutTemplateProps {}

const LayoutTemplate: React.FC<LayoutTemplateProps> = ({}) => {
  return (
    <Layout>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      <Outlet />
    </Layout>
  );
};

export default LayoutTemplate;
