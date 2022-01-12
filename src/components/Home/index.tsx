import React from "react";
import Listings from "./Listings";
import Map from "./Map";
import { listData } from "../../utils/ddata";

const Home = () => {
  const addrs = (data): any[] => {
    return data.map((obj) => `${data.street}, ${data.city}, ON`);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Listings data={listData} />
      </div>
      <div style={{ flexGrow: 3 }}>
        <Map data={listData}/>
      </div>
    </div>
  );
};

export default Home;
