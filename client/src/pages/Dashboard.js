import React from "react";
import Table from "react-bootstrap/Table";
import DashboardForm from "../component/form/DashboardForm";
import MainLayout from "../component/layout/MainLayout";
import TransactionTable from "../component/transactionTable/TransactionTable";

const Dashboard = () => {
  return (
    <MainLayout className="mt-4">
      <hr />
      <DashboardForm />
      <hr />
      <TransactionTable />
    </MainLayout>
  );
};

export default Dashboard;
