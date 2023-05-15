import React, { useState } from "react";
import { nanoid } from "nanoid";
import s from "./AddTodo.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const AddTodo = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const saveNewTodo = () => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title: value,
        status: true,
      },
    ]);

    if (!value) {
      setTodos([...todos]);
      toast.warning("Please, add a new todo!", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
      });
    }

    setValue("");
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Row>
      <Col className={s["filter-container"]}>
        <FormControl
          type="text"
          placeholder="Add new todo"
          value={value}
          onChange={onChange}
        />

        <Button className={s.btn} onClick={saveNewTodo}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <ToastContainer />
      </Col>
    </Row>
  );
};
