import React from 'react'
import Popdrop from "../Popdrop"
import { UserOutlined } from '@ant-design/icons';
import { Row, Col, List, Divider } from "antd"

interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = ({}) => {

  const Item = ({style={}, children}) => (
    <h3 style={style}>
      {children}
    </h3>
  )

  return (
    <Popdrop 
      title={ <UserOutlined style={{ fontSize: "1.5em" }}/> } 
    >
      <div style={{ width: "120px", textAlign: "center", height: "100px" }}>

        <Item>Profile</Item>
        <Divider style={{ margin: "5px 0" }}/>
        <Item>Sign Out</Item>
      </div>
    </Popdrop>
  );
}

export default Profile