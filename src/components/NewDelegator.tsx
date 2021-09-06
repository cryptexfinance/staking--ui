import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const NewDelegator = () => {
  console.log("yo");
  return (
    <Card>
      <div className="diamond" />
      <Card.Body>
        <Card.Title className="pb-2">New Delegator</Card.Title>
        <div>
          <Card.Text>
            Create a Delegator contract which will allow you to receive CTX token votes.
          </Card.Text>
          <Form>
            <Form.Group className="" controlId="">
              <Form.Control type="text" className="neon-green" placeholder="Delegatee Address" />
            </Form.Group>
          </Form>
        </div>

        <Button variant="pink" className="mt-3 mb-4 w-100">
          Create Delegator
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewDelegator;
