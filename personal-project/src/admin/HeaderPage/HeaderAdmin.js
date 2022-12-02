import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderAdmin = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key={1}>
          <Link to="/admin/homedata">Home data</Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to="/admin/xuat-ban-data"> Xuất bản data</Link>
        </Menu.Item>
        <Menu.Item key={3}>
          <Link to="/admin/sach-data">Sách data</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderAdmin;
