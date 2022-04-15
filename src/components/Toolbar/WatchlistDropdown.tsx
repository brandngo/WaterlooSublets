import React from "react";
import Popdrop from "../Popdrop";
import GeneralList from "../GeneralList";
import { Row } from "antd";
import { BookOutlined } from "@ant-design/icons";

interface DropdownProps {}

const Dropdown: React.FC<DropdownProps> = ({}) => {
  const WatchlistBtn = <BookOutlined style={{ fontSize: "1.5em" }} />;
  return (
    <Popdrop title={WatchlistBtn}>
      <GeneralList height="60vh"></GeneralList>
    </Popdrop>
  );
};

export default Dropdown;
