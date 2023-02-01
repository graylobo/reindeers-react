import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Link } from "react-router-dom";
import SideBar from "../components/SiderBar";
import styled from "styled-components";

function DashboardLayout({ children }) {
  return (
    <Layout className="par">
      <SideBar />
      <Layout className="chi">
        <Header className="imheader">나는헤더다</Header>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/what"}>gogo</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>asd</Breadcrumb.Item>
          <Breadcrumb.Item>asd</Breadcrumb.Item>
          <Breadcrumb.Item>asd</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        {children}
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;

const Header = styled(Layout.Header)`
  background: red;
  color: white !important;
`;
