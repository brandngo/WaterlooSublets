import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Typography, Input, Checkbox, Form, Button } from "antd"

const { Title } = Typography;

interface AccountCardProps {

}

const AccountCard: React.FC<AccountCardProps> = ({}) => {
  const [newAccount, setNewAccount] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {console.log(newAccount)}, [newAccount])

  return (
    <Card style={{ borderRadius: "27px", backgroundColor: "#58848A" }}>
        <Col>
          <Row justify='center'>
            <Title>Welcome</Title>
          </Row>
          <Row align="middle" justify='center'>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Row justify="center">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {newAccount ? "SIGN UP" : "SIGN IN"}
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Row>
          <Row justify='center'>
            <Button
              onClick={() => setNewAccount(!newAccount)}
            >
              {newAccount ? "SIGN IN" : "SIGN UP"}
            </Button>
          </Row>
        </Col>
    </Card>
  );
}

export default AccountCard