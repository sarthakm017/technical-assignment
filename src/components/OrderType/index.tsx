import CardHeader from "../CardHeader";
import WhiteDownArrow from "../../asserts/WhiteDownArrow";
import BarChart from "../../asserts/BarChart";
import "./style.css";

const OrderType = () => {
  return (
    <div
      style={{
        background: "#1F1D2B",
        paddingBottom: "10px",
      }}
    >
      <CardHeader
        title="Most Type of Order"
        buttonIcon={<WhiteDownArrow />}
        buttonText="Today"
      />
      <div
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "24px",
        }}
      >
        <div
          style={{
            height: "1px",
            background: "#393C49",
            marginBottom: "20px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BarChart />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div
                className="circle-container"
                style={{
                  background: "#FF7CA3",
                }}
              ></div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {" "}
                  Dine In
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#ABBBC2",
                  }}
                >
                  200 customers
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div
                className="circle-container"
                style={{
                  background: "#FFB572",
                }}
              ></div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {" "}
                  To Go
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#ABBBC2",
                  }}
                >
                  122 customers
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div
                className="circle-container"
                style={{
                  background: "#65B0F6",
                }}
              ></div>
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  {" "}
                  Delivery
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#ABBBC2",
                  }}
                >
                  264 customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderType;
