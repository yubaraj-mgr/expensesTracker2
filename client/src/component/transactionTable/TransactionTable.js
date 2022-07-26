import React from "react";
import Table from "react-bootstrap/Table";

const TransactionTable = ({ transactions }) => {
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
                  <td className="text-danger">{transaction.amount}</td>
                  <td></td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td>{transaction.title}</td>
                  <td></td>
                  <td className="text-danger">{transaction.amount}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: $10</div>
    </>
  );
};

export default TransactionTable;
