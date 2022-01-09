import React from "react";
import { Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import Listings from "./Listings";
import { listData } from "../../utils/ddata";

const Home = () => {
  const mapOptions = () => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Listings data={listData} />
      </div>
      <div style={{ flexGrow: 3 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAUFOKjcmzMJaR5v2ykPrViS0I0uTzsk0Y" }}
          options={mapOptions}
          center={{
            lat: 43.4643,
            lng: -80.5204,
          }}
          defaultZoom={15}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Home;
