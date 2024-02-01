import "./style.css";
import GreenUpArrow from "../../asserts/GreenUpArrow";
import RedDownArrow from "../../asserts/RedDownArrow";

type StatsCardProps = {
  icon: React.ReactNode;
  percentage: string;
  amount: string;
  description: string;
};

const StatsCard = ({
  icon,
  percentage,
  amount,
  description,
}: StatsCardProps) => {
  return (
    <div className="stats-card-container">
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        {icon}
        <p
          style={{
            color: percentage.includes("+") ? "#50D1AA" : "#FF7CA3",
            fontWeight: 500,
          }}
        >
          {percentage}
        </p>
        {percentage.includes("+") ? <GreenUpArrow /> : <RedDownArrow />}
      </div>
      <div
        style={{
          marginTop: "8px",
        }}
      >
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#FFF",
          }}
        >
          {amount}
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#ABBBC2",
            marginTop: "8px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default StatsCard;
