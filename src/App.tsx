import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardReportScreen, OrderTracking, HomeScreen } from "./screens";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/dashboard" element={<DashboardReportScreen />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
