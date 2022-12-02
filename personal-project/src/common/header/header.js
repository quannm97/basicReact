import { Avatar, Layout, Menu, Image, Row, Col, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
const { Header } = Layout;
const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link target="_blank" to="/admin">
              Admin page
            </Link>
          ),
        },
        {
          key: "2",
          label: <span onClick={handleLogout}>Log out</span>,
        },
      ]}
    />
  );

  return (
    <Layout
      style={{
        height: "65px",
        borderBottom: "1px solid #f0f0f0",
        background: "white",
      }}
    >
      <Row>
        <Col span={20} offset={5}>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "59%",
              background: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
            }}
          >
            <div className="logo">
              <Link to="/">
                <Image
                  src="https://static-znews.zingcdn.me/images/logo-zing-home.svg"
                  alt="logo"
                  preview={false}
                  width={100}
                />
              </Link>
            </div>

            <Menu
              theme="light"
              mode="horizontal"
              style={{ borderBottom: "unset" }}
              defaultSelectedKeys={null}
            >
              <Menu.Item key={1}>
                <Link to="/xuat-ban"> Xuất bản</Link>
              </Menu.Item>
              <Menu.Item key={2}>
                <Link to="/sach">Sách</Link>
              </Menu.Item>
              <Menu.Item key={3}>
                <Link to="xa-hoi">Xã hội</Link>
              </Menu.Item>
              <Menu.Item key={4}>
                <Link to="the-gioi">Thế giới</Link>
              </Menu.Item>
              <Menu.Item key={5}>
                <Link to="kinh-doanh">Kinh doanh</Link>
              </Menu.Item>
              <Menu.Item key={6}>
                <Link to="cong-nghe">Công nghệ</Link>
              </Menu.Item>
              <Menu.Item key={7}>
                <Link to="suc-khoe">Sức khỏe</Link>
              </Menu.Item>
              <Menu.Item key={8}>
                <Link to="the-thao">Thể thao</Link>
              </Menu.Item>
            </Menu>
            <Dropdown overlay={menu} placement="bottomRight">
              <Avatar size={32} icon={<UserOutlined />} />
            </Dropdown>
          </Header>
        </Col>
      </Row>
    </Layout>
  );
};

export default HeaderComponent;
