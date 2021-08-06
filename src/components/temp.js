import React, { useState, useEffect } from "react";
import "./style.css";

const Temp = () => {
  const [city, setcity] = useState(null);
  const [search, setSearch] = useState("Bikaner");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=9efc0c930628220b753706e349c5f645`;
      const response = await fetch(url);
      const data = await response.json();
      // if(data===200){
      setcity(data.main);
      // }
      console.log(data);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
        {(city) ? (
          <div>
            <div className="info">
              <h2 className="location">
                <i class="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}<span>&deg;C</span></h1>
              <h3 className="tempmin_max">Min : {city.temp_min}<span>&deg;C</span> | max : {city.temp_max}<span>&deg;C</span></h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        ) : (
          <p className="errorMsg"> No Data Found</p>
        )}
      </div>
    </>
  );
};
export default Temp;
