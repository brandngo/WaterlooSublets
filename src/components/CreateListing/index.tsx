import React, { useState, useRef, useEffect } from "react";
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
  message,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import { NamePath } from "antd/lib/form/interface";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import returnLatLng from "../../apis/geocodeAPI";

const { Step } = Steps;
const { Item, useForm } = Form;
const { Option } = Select;
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX as string,
});

interface CreateListingProps {}

type Coords = [number, number];

const CreateListing: React.FC<CreateListingProps> = ({}) => {
  const [step, setStep] = useState(0);
  const [addrField, setAddrField] = useState("");
  const [mapCenter, setMapCenter] = useState<Coords>([-80.522296, 43.46527]);
  const [mapZoom, setMapZoom] = useState(13);
  const [form] = useForm();
  const addrRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeMapCenter = (center = undefined as Coords | undefined) => {
    if (!center) {
      setMapCenter([-80.522296, 43.46527]);
      setMapZoom(13);
      return;
    }
    setMapZoom(16);
    setMapCenter(center);
  };

  useEffect(() => {
    const locFields = form.getFieldsValue(fieldNames["Location"] as NamePath[]);
    const addr = `${locFields.addr} ${locFields.city}`;
    if (addrRef.current) {
      clearTimeout(addrRef.current);
    }
    if (locFields.addr) {
      addrRef.current = setTimeout(() => {
        returnLatLng(addr).then((res) => {
          changeMapCenter(res?.data.features[0].center);
        });
      }, 2000);
    } else {
      changeMapCenter();
    }
  }, [addrField]);

  const nextStep = () => {
    if (step >= formSteps.length - 1) {
      console.log(form.getFieldsValue(true));

      return;
      // validate form here and submit
    }
    form
      .validateFields(fieldNames["Location"] as NamePath[]) // change key per step
      .then((values) => {
        console.log(values);
        setStep(step + 1);
      })
      .catch(() => {
        message.error("An error occured");
      });
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

  const fieldNames = {
    Location: ["addr", "aprt", "city"],
  };
  const formSteps = [
    {
      title: "Location", // where the user enters where the property is, as well as api call to get lat/lng of address and show it on map
      content: (
        <Col xs={24} lg={10} style={{ height: "50vh", marginBottom: "10vh" }}>
          <Item
            label="Address"
            name={fieldNames["Location"][0]}
            rules={[
              {
                required: true,
                message:
                  "An address is needed, you can enter just the street if desired.",
              },
            ]}
          >
            <Input onChange={(e) => setAddrField(e.target.value)} />
          </Item>
          <Item label="Apartment, suite, etc." name={fieldNames["Location"][1]}>
            <Input />
          </Item>

          <Item
            label="City" // TODO: different options
            name={fieldNames["Location"][2]}
            initialValue="waterloo"
          >
            <Select>
              <Option value="waterloo">Waterloo</Option>
              <Option value="kitchener">Kitchener</Option>
            </Select>
          </Item>
          <Map
            containerStyle={{ width: "100%", height: "40vh" }}
            style="mapbox://styles/mapbox/streets-v9"
            center={mapCenter}
            zoom={[mapZoom]}
          >
            {addrField && mapZoom !== 13 ? (
              <Marker coordinates={mapCenter}>
                <EnvironmentFilled style={{ fontSize: "2em", color: "red" }} />
              </Marker>
            ) : (
              <div />
            )}
          </Map>
        </Col>
      ),
    },
    {
      title: "Extra Details", // include pictures and whats included with place
      content: (
        <>
          <Item
            label="Gender" // TODO: different options
            key="gender"
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Item>
          <Item label="Pictures" key="pic"></Item>
          <Item label="Included" key="incl">
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
            key="rent"
          >
            <InputNumber min={0} />
          </Item>
          <Item label="Additional Costs" key="costs">
            <InputNumber min={0} />
          </Item>
          {
            // TODO: describe additional costs (whats included for utilities etc.)
          }
          <Item label="Term" key="term">
            <DatePicker />
          </Item>
          <Item label="Contract Type" key="type">
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
        <Row justify="center" style={{ width: "100%" }}>
          {determineStep()}
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
