import CycleIcon from "../../asserts/CycleIcon";
import DestinationIcon from "../../asserts/DestinationIcon";
import LocationIcon from "../../asserts/LocationIcon";
import MessageIcon from "../../asserts/MessageIcon";
import PhoneIcon from "../../asserts/PhoneIcon";
import "./style.css";

type DeliveryCardProps = {
  isActive: boolean;
  shipmentNumber: string;
  fromTitle: string;
  fromDescrption: string;
  toTitle: string;
  toDescription: string;
  clientName: string;
  clientAddress: string;
};

const DeliveryCard = ({
  isActive,
  shipmentNumber,
  fromTitle,
  fromDescrption,
  toTitle,
  toDescription,
  clientName,
  clientAddress,
}: DeliveryCardProps) => {
  return (
    <div
      style={{
        width: "374px",
        borderRadius: "12px",
        border: isActive
          ? "2px solid #EA7C69"
          : "1px solid rgba(236, 238, 246, 0.60)",
        background: "#252836",
        boxShadow: isActive
          ? "0px 20px 50px 0px rgba(220, 224, 249, 0.50)"
          : "0px 20px 60px 0px rgba(0, 0, 0, 0.05)",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFF",
            }}
          >
            Shipment number
          </p>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            {shipmentNumber}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#FFF",
              marginTop: "10px",
            }}
          >
            Food Materials
          </p>
        </div>
        <CycleIcon />
      </div>
      <div
        style={{
          height: "1px",
          background: "#ECECEC",
          width: "auto",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <LocationIcon />
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            {fromTitle}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#FFF",
            }}
          >
            {fromDescrption}
          </p>
        </div>
      </div>
      <div className="vertical-dotted-line"></div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <DestinationIcon />
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            {toTitle}
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#FFF",
            }}
          >
            {toDescription}
          </p>
        </div>
      </div>

      <div
        style={{
          height: "1px",
          background: "#ECECEC",
          width: "auto",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            {" "}
            Client
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFF",
            }}
          >
            {clientName}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#FFF",
            }}
          >
            {clientAddress}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
          }}
        >
          <PhoneIcon />
          <MessageIcon />
        </div>
      </div>
    </div>
  );
};
export default DeliveryCard;
