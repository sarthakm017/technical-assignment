import CardHeader from "../CardHeader";
import WhiteDownArrow from "../../asserts/WhiteDownArrow";
import "./style.css";

const MostOrdered = () => {
  return (
    <div
      style={{
        background: "#1F1D2B",
      }}
    >
      <CardHeader
        title="Most Ordered"
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
            flexDirection: "column",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#E0E6E9",
              }}
            >
              Spicy seasoned seafood noodles
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#ABBBC2",
              }}
            >
              {" "}
              200 dishes ordered
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#E0E6E9",
              }}
            >
              Salted pasta with mushroom sauce
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#ABBBC2",
              }}
            >
              {" "}
              120 dishes ordered
            </p>
          </div>

          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#E0E6E9",
              }}
            >
              Beef dumpling in hot and sour soup
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#ABBBC2",
              }}
            >
              {" "}
              80 dishes ordered
            </p>
          </div>
        </div>

        <div className="view-all-button">
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#EA7C69",
            }}
          >
            View All
          </p>
        </div>
      </div>
    </div>
  );
};
export default MostOrdered;
