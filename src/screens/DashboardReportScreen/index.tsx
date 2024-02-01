import "./style.css";
import DollarIcon from "../../asserts/DollarIcon";
import BookmarkIcon from "../../asserts/BookmarkIcon";
import FilterIcon from "../../asserts/FilterIcon";
import {
  CardHeader,
  Divider,
  MostOrdered,
  NavBar,
  OrderType,
  StatsCard,
  TableRow,
} from "../../components";
import { OrderData } from "../../TableData";

const DashboardReportScreen = () => {
  return (
    <div className="dashboard-main-container ">
      <NavBar />

      <div>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#FFF",
          }}
        >
          Dashboard
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#ABBBC2",
            marginTop: "5px",
          }}
        >
          Tuesday 2 Feb, 2021
        </p>
        <Divider />

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <StatsCard
            icon={<DollarIcon />}
            percentage="+32.40%"
            amount="$10,243.00"
            description="Total Revenue"
          />
          <StatsCard
            icon={<BookmarkIcon />}
            percentage="-12.40%"
            amount="$23,456"
            description="Total Dish Ordered"
          />
          <StatsCard
            icon={<DollarIcon />}
            percentage="+2.40%"
            amount="$1,234"
            description="Total Customer"
          />
        </div>

        <div
          style={{
            background: "#1F1D2B",
            paddingLeft: "24px",
            paddingRight: "24px",
            height: "465px",
          }}
        >
          <CardHeader
            title="Order Report"
            buttonIcon={<FilterIcon />}
            buttonText="Filter Order"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {Object.keys(OrderData[0]).map((key, index) => (
              <p
                key={index}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFF",
                }}
              >
                {key}
              </p>
            ))}
          </div>
          <Divider />

          {OrderData.map((row, index) => (
            <div
              style={{
                padding: "10px",
                width: "auto",
              }}
            >
              <TableRow
                customerName={row.Customer}
                menu={row.Menu}
                payment={row.TotalPayment}
                status={row.Status}
                circleColor="#FFB572"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <MostOrdered />
        <OrderType />
      </div>
    </div>
  );
};
export default DashboardReportScreen;
