import axios from "axios";

export const mapBoxAPI = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const returnLatLng = async (addr: string) => {
  const endpoint = "mapbox.places"
  try {
    const resp = await mapBoxAPI.get(`${endpoint}/${addr}.json?access_token=${process.env.REACT_APP_MAPBOX}`)
    const {data, status} = resp
    return { data, status }
  } catch(err) {
    console.log(err)
  }
};

export default returnLatLng;
