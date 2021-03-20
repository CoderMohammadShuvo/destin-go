import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mapImg from "../../images/Map.png";
import HomeVehicleFakeData from "../../FakeData/HomeVehicleFakeData";
import "./Destination.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Destination = () => {
  let { vehicleName } = useParams();
  console.log(vehicleName);
  const chosenVehicle = HomeVehicleFakeData.find(
    (vehicle) => vehicle.vehicle_name === vehicleName
  );
  let { vehicle_detail, vehicle_img } = chosenVehicle;
  // console.log(vehicle_detail, vehicle_img);
  let [searchSuccessful, setSearchSuccessful] = useState(false);
  let [pickFrom,setPickFrom]=useState("");
  let [dropTo,setDropTo]=useState("");
  let handleOnBlur = (e) => {
    if (e.target.name === "from") {
      setPickFrom(e.target.value)
    }
    if (e.target.name === "to") {
      setDropTo(e.target.value);
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (pickFrom !== "" && dropTo !== "") {
      setSearchSuccessful(!searchSuccessful);
      console.log(searchSuccessful);
    }
  };
  return (
    <div>
      <div className="destination-detail">
        {!searchSuccessful ? (
          <div>
            <form action="" className="ride-form" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="from"
                  id=""
                  placeholder="Pick from"
                  onBlur={handleOnBlur}
                  className="ride-form-input"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="to"
                  id=""
                  placeholder="Drop to"
                  onBlur={handleOnBlur}
                  className="ride-form-input"
                />
              </div>
              <div>
                <input type="submit" value="Search" className="submit-input" />
              </div>
            </form>
          </div>
        ) : (
          <div className="after-serch-main">
          <div className="after-search">
            <div>
              <p>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
                <span>
                  {" "}
                  Pick From : <span>{pickFrom}</span>
                </span>
              </p>
              <p>
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                <span>
                  {" "}
                  Drop To : <span>{dropTo}</span>
                </span>
              </p>
            </div>
          </div>

          <div className="vehicle-details">
            {vehicle_detail.map((singleVehicle) => {
              let { V_name, V_passanger, V_cost } = singleVehicle;
              return (
                <div className="single-details">
                  <div>
                    <img src={vehicle_img} alt="" style={{ width: "50px" }} />
                  </div>
                  <div>
                    <h5>{V_name}</h5>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span> {V_passanger}</span>
                  </div>
                  <div>
                    <p>
                      $ <span>{V_cost}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        )}
      </div>
      <div className="map-div">
        <img src={mapImg} alt="" className="map"/>
      </div>
    </div>
  );
};

export default Destination;
