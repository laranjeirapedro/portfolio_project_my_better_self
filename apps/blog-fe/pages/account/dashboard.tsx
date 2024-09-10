import React from "react";
import { Button } from "@app/components";
import { logout } from "../../utils/firebaseConfig";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        label="Logout"
        onClick={() => {
          logout();
        }}
      />
    </div>
  );
};

export default Dashboard;
