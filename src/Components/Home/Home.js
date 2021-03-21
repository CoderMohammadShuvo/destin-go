import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeVehicleFakeData from "../../FakeData/HomeVehicleFakeData";
import { Link, useHistory } from "react-router-dom";
import backgroundVedio from "../Vedio/mixkit-animation-of-buildings-popping-up-on-a-street-99712.mp4";

const Home = () => {
  let [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    setFakeData(HomeVehicleFakeData);
  }, []);

  return (
    <div>
      <video autoPlay loop muted className="home-vedio">
        <source src={backgroundVedio} type="video/mp4" />
      </video>
      <div className="home-body">
        <div className="home-vehicle-cards">
          {fakeData.map((vehicle) => {
            let { vehicle_name, vehicle_img, vehicle_id } = vehicle;
            return (
              <Link
                to={`/destination/${vehicle_name}`}
                className="single-vehicle-link"
              >
                <div className="single-vehicle-card">
                  <img src={vehicle_img} alt="" className="vehicle-img" />
                  <h2>{vehicle_name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
