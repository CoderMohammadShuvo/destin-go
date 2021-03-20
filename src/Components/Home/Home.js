import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeVehicleFakeData from "../../FakeData/HomeVehicleFakeData";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  let [fakeData,setFakeData]=useState([])
  useEffect(()=>{
    setFakeData(HomeVehicleFakeData);
  },[])
  
  return (
    <div className="home-body">
      <div className="home-vehicle-cards">
        {fakeData.map(vehicle => {
            let {vehicle_name,vehicle_img,vehicle_id}=vehicle;
          return (
            <Link to={`/destination/${vehicle_name}`} className="single-vehicle-link"><div className="single-vehicle-card">
              <img src={vehicle_img} alt="" className="vehicle-img" />
              <h2>{vehicle_name}</h2>
            </div></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
