import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./paymentpage.css";

const TrackingHeader = () => {
  return (
    <header className="track">
      <Link to="/Success/OrderPreparation">Order Status</Link>
      <Link to="#">Delivery Status</Link>
      <Link to="#">Map Status</Link>
      <Outlet />
    </header>
  );
};

export default TrackingHeader;
