import React from "react";
import { Outlet } from "react-router-dom";
import DashLayout from "../../layouts/DashboardLayout";
function index() {
  return (
    <DashLayout>
      <Outlet />
    </DashLayout>
  );
}

export default index;
