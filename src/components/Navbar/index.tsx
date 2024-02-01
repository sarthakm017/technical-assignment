import "./style.css";
import StoreIcon from "../../asserts/StoreIcon";
import HomeIcon from "../../asserts/HomeIcon";
import ZigZagIcon from "../../asserts/ZigZagIcon";
import PieChartIcon from "../../asserts/PieChartIcon";
import MailIcon from "../../asserts/MailIcon";
import BailIcon from "../../asserts/BailIcon";
import SettingsIcon from "../../asserts/SettingsIcon";
import LogoutIcon from "../../asserts/LogoutIcon";
import { useNavigate } from "react-router-dom";
import ZigZagSelected from "../../asserts/ZigZagSelected";
import PiechartSelected from "../../asserts/PiechartSelected";

const NavBar = () => {
  const navigate = useNavigate();
  // const [ setPath] = useState("/dashboard");

  const handleClick = (path: string) => {
    if (path === "") {
      alert("We are not supporting this feature right now..");
    }
    if (path) {
      navigate(path);
      // setPath(path);
    }
  };

  return (
    <div className="navbar-container">
      <div onClick={() => handleClick("")}>
        <StoreIcon />
      </div>
      <div onClick={() => handleClick("")}>
        <HomeIcon />
      </div>
      <div onClick={() => handleClick("/order-tracking")}>
        {window.location.href.includes("order-tracking") ? (
          <ZigZagSelected />
        ) : (
          <ZigZagIcon />
        )}
      </div>
      <div onClick={() => handleClick("/dashboard")}>
        {window.location.href.includes("dashboard") ? (
          <PiechartSelected />
        ) : (
          <PieChartIcon />
        )}
      </div>
      <div onClick={() => handleClick("")}>
        <MailIcon />
      </div>
      <div onClick={() => handleClick("")}>
        <BailIcon />
      </div>
      <div onClick={() => handleClick("")}>
        <SettingsIcon />
      </div>
      <div onClick={() => handleClick("")}>
        <LogoutIcon />
      </div>
    </div>
  );
};
export default NavBar;
