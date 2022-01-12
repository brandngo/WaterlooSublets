import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { GeoAltFill } from "react-bootstrap-icons";

interface MapProps {
  data: any[];
  active: number | null;
}

const Marker = ({ number, active, lat, lng }) => {
  return (
    <div>
      <GeoAltFill size={active ? 40 : 30} color={active ? "red" : "black"} />
    </div>
  );
};

// make sure data has lat and lng fields
const Map: React.FC<MapProps> = ({ data, active }) => {
  const [markers, setMarkers]: any[] = useState([]);

  useEffect(() => {
    setMarkers(
      data.map((item) => (
        <Marker active={false} number={item.id} lat={item.lat} lng={item.lng} />
      ))
    );
  }, [data]);

  useEffect(() => {
    if (active !== null) {
      console.log(active);
      let oldInfo = markers[active].props;
      let newMarker = (
        <Marker
          active={true}
          number={oldInfo.id}
          lat={oldInfo.lat}
          lng={oldInfo.lng}
        />
      );

      setMarkers([
        ...markers.slice(0, active),
        newMarker,
        ...markers.slice(active + 1),
      ]);
    }
  }, [active]);

  const mapOptions = () => ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
  });

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAPS
          ? process.env.REACT_APP_GOOGLE_MAPS
          : "",
      }}
      options={mapOptions}
      center={{
        lat: 43.474487,
        lng: -80.53712,
      }}
      defaultZoom={16}
    >
      {markers}
    </GoogleMapReact>
  );
};

export default Map;
