import React from "react";
import s from "./Header.module.css";
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Row>
      <Col>
        <div className={s["header-container"]}>TODO List</div>
      </Col>
    </Row>
  );
};
