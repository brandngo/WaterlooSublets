import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Input,
  Checkbox,
  Form,
  Button,
  message,
} from "antd";
import login, { Login } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

interface AccountCardProps {}

const AccountCard: React.FC<AccountCardProps> = ({}) => {
  const [newAccount, setNewAccount] = useState(false); // determine if the user is creating a new account or signing in

  let navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Success:", values);

    const { email, password } = values;
    const loginObj: Login = {
      email,
      password,
    };

    if (newAccount) {
      login()
        .signUp(loginObj)
        .then((res) => {
          message.success("You signed up! Please login.");
        })
        .catch((err) => message.error("Unable to sign up"));
    } else {
      console.log(process.env.REACT_APP_SUBLETSBACKEND);
      login()
        .signIn(loginObj)
        .then((res) => {
          document.cookie = `user_token=${res.data.token}; max-age=86400; path=/;`;
          message.success("Signed in!");
          navigate("/explore");
        })
        .catch((err) => message.error("Unable to sign in"));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      className="login-gradient"
      style={{
        borderRadius: "27px",
        height: "60vh",
        minHeight: "380px",
        width: "400px",
        borderColor: "black",
      }}
    >
      <Col>
        <Row justify="center" style={{ height: "250px" }}>
          <Title>Welcome</Title>
        </Row>
        <Row align="middle" justify="center">
          <Form
            name="basic"
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div>
              <p
                style={{
                  marginLeft: "20px",
                  marginBottom: "1px",
                  fontWeight: "bold",
                }}
              >
                Email
              </p>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="login-button" />
              </Form.Item>
            </div>

            <div>
              <p
                style={{
                  marginLeft: "20px",
                  marginBottom: "1px",
                  fontWeight: "bold",
                }}
              >
                Password
              </p>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="login-button" />
              </Form.Item>
            </div>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 2, span: 16 }}
            >
              <Checkbox>
                <p style={{ marginLeft: "3px", fontWeight: "bold" }}>
                  Remember me
                </p>
              </Checkbox>
            </Form.Item>

            <Row justify="center">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                  style={{
                    backgroundColor: "#8184A8",
                    borderColor: "transparent",
                  }}
                >
                  <h3 style={{ margin: 0, color: "white" }}>
                    {newAccount ? "SIGN UP" : "SIGN IN"}
                  </h3>
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Button
            onClick={() => setNewAccount(!newAccount)}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <h3 style={{ margin: 0, color: "#8184A8" }}>
              {newAccount ? "SIGN IN" : "SIGN UP"}
            </h3>
          </Button>
        </Row>
      </Col>
    </Card>
  );
};

export default AccountCard;
