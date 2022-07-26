import React from "react";
import Table from "react-bootstrap/Table";

const TransactionTable = ({ transactions }) => {
  let totalIncome = 0;
  let totalExpenses = 0;
  transactions.forEach((transaction) => {
    const amount = parseInt(transaction.amount);
    transaction.type === "income"
      ? (totalIncome += amount)
      : (totalExpenses += amount);
  });
  const balance = totalIncome - totalExpenses;
  return (
    <>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Income</th>
            <th>Expenses</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return transaction.type === "income" ? (
              <>
                <tr>
                  <td>{transaction.title}</td>
                  <td className="text-danger">${transaction.amount}</td>
                  <td></td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td>{transaction.title}</td>
                  <td></td>
                  <td className="text-danger">${transaction.amount}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: ${balance}</div>
    </>
  );
};

export default TransactionTable;
