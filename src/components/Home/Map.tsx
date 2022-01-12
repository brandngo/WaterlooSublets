import React from 'react'
import GoogleMapReact from "google-map-react";

interface MapProps {
  data: any[]; 
}

const Marker = ({number, lat, lng}) => {
  return (
    <div style={{    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'}}>{number}</div>
  )
}
    
// make sure data has lat and lng fields
const Map: React.FC<MapProps> = ({data}) => {

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
        lng: -80.537120,
      }}
      defaultZoom={16}
    >
      {data.map((item) => (
        <Marker 
          number={item.id}
          lat={item.lat}
          lng={item.lng}
        />
      ))}
    </GoogleMapReact>
  );
}

export default Map