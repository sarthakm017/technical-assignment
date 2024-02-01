import Chip from "../Chip";
import "./style.css";

type TableRowProps = {
  customerName: string;
  menu: string;
  payment: string;
  status: string;
  circleColor: string;
};
const TableRow = ({
  customerName,
  menu,
  payment,
  status,
  circleColor,
}: TableRowProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#E0E6E9",
        }}
      >
        <span
          className="circle-container"
          style={{
            background: circleColor,
          }}
        ></span>
        {customerName}
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#E0E6E9",
        }}
      >
        {menu}
      </p>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#E0E6E9",
        }}
      >
        {payment}
      </p>
      <Chip content={status} />
    </div>
  );
};
export default TableRow;
