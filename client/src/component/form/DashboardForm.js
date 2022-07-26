import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import { insertTransaction } from "../../helper/axiosHelper";

const initialObj = {
  title: "",
  amount: "",
  type: "",
};
const DashboardForm = ({ fetchAllData }) => {
  const [transactionDetails, settransactionDetails] = useState(initialObj);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    settransactionDetails({
      ...transactionDetails,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { message, response, status } = await insertTransaction(
      transactionDetails
    );
    status === "success" && toast[status](message);
    fetchAllData();
  };
  return (
    <Form className="mt-4" onSubmit={handleOnSubmit}>
      <h4>Add Transaction</h4>
      <Row className="g-2">
        <Col md="2">
          <Form.Control
            name="title"
            placeholder="Transaction name"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="5">
          <Form.Select
            defaultValue="Choose..."
            onChange={handleOnChange}
            name="type"
          >
            <option value="">Choose...</option>
            <option value="income">Income.</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            name="amount"
            placeholder="amount"
            onChange={handleOnChange}
          />
        </Col>
        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardForm;
