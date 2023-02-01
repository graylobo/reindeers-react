import React from "react";
import { Card, Col, Input, Row, Space } from "antd";
function ListLayout({ children }) {
  return (
    <Row>
      <Col>
        <Card>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default ListLayout;
