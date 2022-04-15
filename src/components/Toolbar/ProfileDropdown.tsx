import React from "react";
import Popdrop from "../Popdrop";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Row, Col, List, Divider } from "antd";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const navigate = useNavigate();

  const Item = ({ onClick = () => {}, style = {}, children }) => (
    <h3 style={style} onClick={() => onClick()}>
      {children}
    </h3>
  );

  // remove this to use auth.ts logout
  const signOut = () => {
    console.log("clicked");
    document.cookie =
      "user_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    navigate("/");
  };

  return (
    <Popdrop title={<UserOutlined style={{ fontSize: "1.5em" }} />}>
      <div
        style={{
          width: "120px",
          textAlign: "center",
          height: "95px",
          padding: "10px 0",
        }}
      >
        <Item>Profile</Item>
        <Divider style={{ margin: "10px 0" }} />
        <Item onClick={signOut}>Sign Out</Item>
      </div>
    </Popdrop>
  );
};

export default Profile;
