import React from "react";
import { Spinner, Row } from "reactstrap";

export default function Loading() {
  return (
    <Row className="my-5 text-warning d-flex justify-content-center">
      <Spinner style={{ width: "3rem", height: "3rem" }} />
    </Row>
  );
}
