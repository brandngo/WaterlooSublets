import React, { useState } from "react";
import Listings from "./Listings";
import Map from "./Map";
import { listData } from "../../utils/ddata"; // dummy data

const Home = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const addrs = (data): any[] => {
    return data.map((obj) => `${data.street}, ${data.city}, ON`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Listings data={listData} setActive={setActiveCard} />
      </div>
      <div style={{ flexGrow: 3 }}>
        <Map data={listData} active={activeCard} />
      </div>
    </div>
  );
};

export default Home;
