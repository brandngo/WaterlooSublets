import React, { useState } from "react";
import {
  Row,
  Col,
  Steps,
  Button,
  Space,
  Form,
  Input,
  Divider,
  InputNumber,
  Select,
  DatePicker,
} from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Step } = Steps;
const { Item, useForm } = Form;
const { Option } = Select;

interface CreateListingProps {}

const CreateListing: React.FC<CreateListingProps> = ({}) => {
  const [step, setStep] = useState(0);
  const [form] = Form.useForm();

  const nextStep = () => {
    if (step >= formSteps.length - 1) {
      console.log(form.getFieldsValue(true));

      return;
      // validate form here and submit
    }
    setStep(step + 1);
  };
  const prevStep = () => {
    if (step <= 0) return;
    setStep(step - 1);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 6 },
      sm: { span: 12 },
    },
  };

  const formSteps = [
    {
      title: "Location", // where the user enters where the property is, as well as api call to get lat/lng of address and show it on map
      content: (
        <>
          <Item label="Address">
            <Input />
          </Item>
          <Item label="Apartment, suite, etc.">
            <Input />
          </Item>

          <Input.Group>
            <Row>
              <Space>
                <Item>
                  <Input placeholder="Waterloo" />
                </Item>
                <Item>
                  <Input placeholder="Ontario" />
                </Item>
                <Item>
                  <Input placeholder="Canada" />
                </Item>
              </Space>
            </Row>
          </Input.Group>
          <Item label="Postal Code">
            <Input />
          </Item>
        </>
        // TODO: add map view of the location entered
      ),
    },
    {
      title: "Extra Details", // include pictures and whats included with place
      content: (
        <>
          <Item
            label="Gender" // TODO: different options
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Item>
          <Item label="Pictures"></Item>
          <Item label="Included">
            {
              // dynamic inputs "Complex Dynamic Form Item"
            }
          </Item>
        </>
      ),
    },
    {
      title: "Contract Details", // contains rent cost, length of contract/stay
      content: (
        <>
          <Item
            label="Rent (monthly)" // TODO: different options
            name="rent"
          >
            <InputNumber min={0} />
          </Item>
          <Item label="Additional Costs">
            <InputNumber min={0} />
          </Item>
          {
            // TODO: describe additional costs (whats included for utilities etc.)
          }
          <Item label="Term">
            <DatePicker />
          </Item>
          <Item label="Contract Type">
            <Select>
              <Option value="sublease">Sublease</Option>
              <Option value="lease">Lease</Option>
            </Select>
          </Item>
        </>
      ),
    },
  ];

  const determineStep = () => {
    switch (step) {
      case 0:
        return formSteps[0].content;
      case 1:
        return formSteps[1].content;
      case 2:
        return formSteps[2].content;
      default:
    }
  };

  return (
    <>
      <Row justify="center">
        <Col sm={24} lg={12}>
          <Steps current={step}>
            {formSteps.map((item) => (
              <Step title={item.title} />
            ))}
          </Steps>
        </Col>
      </Row>
      <Divider />
      <Form form={form} colon={false}>
        <Row justify="center">
          <Col>{determineStep()}</Col>
        </Row>
      </Form>

      <Row justify="center">
        <Space>
          <Button onClick={prevStep} type="primary" size="large">
            <LeftOutlined />
            Previous
          </Button>
          <Button onClick={nextStep} type="primary" size="large">
            {step >= formSteps.length - 1 ? "Submit" : "Next"}
            <RightOutlined />
          </Button>
        </Space>
      </Row>
    </>
  );
};

export default CreateListing;
