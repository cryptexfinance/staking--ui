import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";

type params = {
  address: string;
};

const Delegator = () => {
  const { address } = useParams<params>();
  return (
    <Row xs={1} md={4} className="mb-4">
      <Col>
        <ProfileCard address={address} action="edit" />
      </Col>
    </Row>
  );
};

export default Delegator;
