import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

interface FormListProps {}

const FormList: React.FC<FormListProps> = ({}) => {
  return (
    <Form.List
      name="furniture"
      rules={[
        {
          validator: async (_, names) => {
            if (names?.length > 1 && !names[names?.length - 2]) {
              return Promise.reject(
                new Error("Remove extra fields if not needed.")
              );
            }
          },
        },
      ]}
    >
      {(fields, { add, remove }, { errors }) => (
        <>
          {fields.map((field, index) => (
            <Form.Item required={false} key={field.key}>
              <Row align="middle" gutter={10}>
                <Col>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    noStyle
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  {
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  }
                </Col>
              </Row>
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              disabled={fields.length >= 5}
              style={{ width: "60%" }}
              icon={<PlusOutlined />}
            >
              Add field
            </Button>
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FormList;
