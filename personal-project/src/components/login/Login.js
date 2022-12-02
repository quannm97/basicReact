import { Button, Form, Input, notification } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import { loginAction } from "../../store/action";
const Login = (props) => {
  const navigate = useNavigate();
  const { loginDispatch } = props;
  const onFinish = async (values) => {
    const res = await loginDispatch(values);
    if (res?.status === 200) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: res.data.result.token,
        })
      );
      notification.open({
        message: "Đăng Nhập Thành Công",
        icon: <CheckOutlined style={{ color: "#33cc33" }} />,
      });
      navigate("/");
    } else {
      notification.open({
        message: "Đăng Nhập Không Thành Công",
        icon: <CloseOutlined style={{ color: "red " }} />,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 6,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="admineh" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Estella1230" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (payload) => loginAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
