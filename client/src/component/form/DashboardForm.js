import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DashboardForm = () => {
  return (
    <Form className="mt-4">
      <h4>Add Transaction</h4>
      <Row className="g-2">
        <Col md="2">
          <Form.Control name="title" placeholder="Transaction name" />
        </Col>
        <Col md="5">
          <Form.Select defaultValue="Choose...">
            <option value="">Choose...</option>
            <option value="income">Income.</option>
            <option value="expenses">Expenses</option>
          </Form.Select>
        </Col>
        <Col md="2">
          <Form.Control type="number" name="amount" placeholder="amount" />
        </Col>
        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardForm;
