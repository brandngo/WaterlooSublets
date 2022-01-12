import jsonp from "jsonp";

// this was previously using the react-geocode component (google geocode api wrapper)
// however nominatim provides free geocoding using freeform queries

const returnLatLng = async (street: string, city: string) => {
  let formattedSt = street.replace(" ", "+");
  let endpoint = `https://nominatim.openstreetmap.org/search?street${formattedSt}&city=${city}&state=ON&format=json`;
  /*
  nominatimAPI.get(endpoint)
    .then(res => {
      return {
        lat: res["lat"],
        lng: res["lon"]
      }
    })
    .catch(err => console.log(err));
*/
  jsonp(endpoint, null, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      return data;
    }
  });
};
/*
const test = async () => {
  const results = await Promise.all(data.map(async (item) => geocode(item["street"], item["city"])));
      return results;
}
*/
export default returnLatLng;
