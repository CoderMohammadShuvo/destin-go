import React from "react";
import { GoogleMap,withScriptjs,withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
    ></GoogleMap>
  );
};
const WrappedMap=withScriptjs(withGoogleMap(Map))

export default Map ;
export {WrappedMap};
