import { useState } from "react";
import { DeliveryCard, NavBar, SearchBar } from "../../components";
import "./style.css";
import MapIcon from "../../asserts/MapIcon";

const OrderTracking = () => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="main-container">
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginLeft: "40px",
        }}
      >
        <SearchBar />
        <p
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#FFF",
          }}
        >
          Ongoing Delivery
        </p>
        <div onClick={() => setActiveCard(0)}>
          <DeliveryCard
            isActive={activeCard === 0 ? true : false}
            shipmentNumber={"EV-2017002346"}
            fromTitle={"2972 Westheimer "}
            fromDescrption={"Rd. Santa Ana, Illinois 85486 "}
            toTitle={"8502 Preston "}
            toDescription={"Rd. Inglewood, Maine 98380"}
            clientName={"Darrell Steward"}
            clientAddress={"Mariene, LTD"}
          />
        </div>
        <div onClick={() => setActiveCard(1)}>
          <DeliveryCard
            isActive={activeCard === 1 ? true : false}
            shipmentNumber={"EV-2017002346"}
            fromTitle={"2972 Westheimer "}
            fromDescrption={"Rd. Santa Ana, Illinois 85486 "}
            toTitle={"8502 Preston "}
            toDescription={"Rd. Inglewood, Maine 98380"}
            clientName={"Darrell Steward"}
            clientAddress={"Mariene, LTD"}
          />
        </div>
      </div>
      <div
        style={{
          height: "1024px",
          // width: "1440px",
          marginLeft: "100px",
        }}
      >
        <MapIcon />
      </div>
    </div>
  );
};
export default OrderTracking;
