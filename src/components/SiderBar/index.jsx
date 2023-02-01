import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

function index() {
  return (
    <Layout.Sider>
      <Menu mode="inline">
        <Menu.SubMenu title="상품관리">
          <Menu.Item>
            <Link to={`/products/subBrand`}>브랜드</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/products/subCate`}>카테고리그룹</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item>안녕</Menu.Item>
        <Menu.Item>ㅋㅋ</Menu.Item>
        <Menu.Item>ㅎㅎ</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default index;
