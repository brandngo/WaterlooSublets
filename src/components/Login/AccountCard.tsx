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
  Spin,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Login } from "../../apis/auth";
import { useSelector } from "react-redux";
import { useThunkDispatch } from "../../store";
import { clearMessage } from "../../slice/message";
import { login, register } from "../../slice/auth";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

interface AccountCardProps {}

// https://stackoverflow.com/questions/65387046/property-user-does-not-exist-on-type-defaultrootstate
// adding types to root state

const AccountCard: React.FC<AccountCardProps> = ({}) => {
  const [newAccount, setNewAccount] = useState(false); // determine if the user is creating a new account or signing in
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state?.["auth"]);
  //const { apiMessage } = useSelector(state => state?.["message"])

  let navigate = useNavigate();
  const dispatch = useThunkDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onFinish = (values: any) => {
    const { email, password } = values;
    const loginObj: Login = {
      email,
      password,
    };
    setLoading(true);

    if (newAccount) {
      dispatch(register(loginObj))
        .unwrap()
        .then(() => {
          message.success("Registered!");
        })
        .catch((err) => message.error("Unable to register"))
        .then(() => setLoading(false));
    } else {
      dispatch(login(loginObj))
        .unwrap()
        .then(() => {
          message.success("Signed In!");
          navigate("/explore");
        })
        .catch((err) => {
          console.log(err);
          message.error("Unable to sign in");
        })
        .then(() => setLoading(false));
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
                <Row justify="center" align="middle">
                  <Spin
                    spinning={loading}
                    indicator={
                      <LoadingOutlined style={{ fontSize: 24 }} spin />
                    }
                  />
                  <h3
                    style={{ margin: 0, color: "white", textAlign: "center" }}
                  >
                    {newAccount ? "SIGN UP" : "SIGN IN"}
                  </h3>
                </Row>
              </Button>
            </Form.Item>
          </Form>
        </Row>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Button
            onClick={() => setNewAccount(!newAccount)}
            disabled={loading}
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
