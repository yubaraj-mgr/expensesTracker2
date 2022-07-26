import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import DashboardForm from "../component/form/DashboardForm";
import MainLayout from "../component/layout/MainLayout";
import TransactionTable from "../component/transactionTable/TransactionTable";
import { fetchAllTransactions } from "../helper/axiosHelper";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const { status, response } = await fetchAllTransactions();
    status === "success" && setTransactions(response);
  };
  return (
    <MainLayout className="mt-4">
      <hr />
      <DashboardForm fetchAllData={fetchAllData} />
      <hr />
      <TransactionTable transactions={transactions} />
    </MainLayout>
  );
};

export default Dashboard;
