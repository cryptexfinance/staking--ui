import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const Delegation = () => (
  <Row xs={1} md={4} className="mb-4">
    <Col>
      <ProfileCard address="0x983110309620D911731Ac0932219af06091b6744" action="delegate" />
    </Col>
    <Col>
      <ProfileCard address="0x50197393681865a62e2bf45a9f8f9d3b6310495a" action="delegate" />
    </Col>
    <Col>
      <ProfileCard address="0x1289f94BCC60eD9F894AB9D5a54C21b3D4B3f2DA" action="delegate" />
    </Col>
    <Col>
      <ProfileCard address="0x50197393681865a62e2bf45a9f8f9d3b6310495a" action="delegate" />
    </Col>
    <Col>
      <ProfileCard address="0x50197393681865a62e2bf45a9f8f9d3b6310495a" action="delegate" />
    </Col>
  </Row>
);

export default Delegation;
