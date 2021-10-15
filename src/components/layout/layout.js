import React, { useEffect, useState } from "react";
import "./layout.css";
import Card from "../../components/cards/card";
import Heading from "../../components/heading/heading"

const Layout = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const reqObj = await fetch("https://data.covid19india.org/data.json");
      const reqData = await reqObj.json();
      setData(reqData.statewise);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="main_content">
    <Heading title="Covid 19 Tracker"></Heading>
      <ul className="cards">
        {data.map((data, index) => {
          return (
            <Card
              key={data.state}
              title={data.state}
              death={data.deaths}
              active={data.active}
              delta={data.deltadeaths}
              recovered={data.recovered}
            ></Card>
          );
        })}
      </ul>
    </div>
  );
};

export default Layout;
