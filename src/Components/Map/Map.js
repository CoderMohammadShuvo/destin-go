import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Destination from "../Destination/Destination";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const center = {
  lat: parseFloat(23.810331),
  lng: parseFloat(90.412521),
};

function Map({ pickFrom, dropTo }) {
  let [directionResponse, setDirectionResponse] = useState(null);
  console.log(pickFrom,dropTo);
  return (
    <LoadScript googleMapsApiKey="AIzaSyDZPJVvXUSCU-bdgO5bNRrZcUEnWu-LLD8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {
        pickFrom!==''&&  dropTo !=='' && <DirectionsService
          options={{
            destination:  dropTo ,
            origin:  {pickFrom} ,
            travelMode: "DRIVING",
          }}
          callback={(res) => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}
        />
      }
        {directionResponse && (
          <DirectionsRenderer
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
