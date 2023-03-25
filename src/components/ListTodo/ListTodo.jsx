import React, { useEffect, useState } from "react";
import s from "./ListTodo.module.css";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faFloppyDisk,
  faPenToSquare,
  faLockOpen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const ListTodo = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [newValue, setNewValue] = useState("");
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setNewValue(title);
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const onChange = (e) => {
    setNewValue(e.target.value);
  };

  const saveNewTitle = (id) => {
    const newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = newValue;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todo);
    } else {
      const newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  };
  console.log(todo);
  return (
    <>
      <div className={s["btn-container"]}>
        <input
          className={s.input}
          type="radio"
          name="filter"
          id="all-filter"
          defaultChecked
        />
        <label
          className={s.button}
          htmlFor="all-filter"
          onClick={() => todoFilter("all")}
        >
          ALL
        </label>
        <input
          className={s.input}
          type="radio"
          name="filter"
          id="fulfilled-filter"
        />
        <label
          className={s.button}
          htmlFor="fulfilled-filter"
          onClick={() => todoFilter(false)}
        >
          FULFILLED
        </label>
        <input
          className={s.input}
          type="radio"
          name="filter"
          id="unfulfilled-filter"
        />
        <label
          className={s.button}
          htmlFor="unfulfilled-filter"
          onClick={() => todoFilter(true)}
        >
          UNFULFILLED
        </label>
      </div>

      {filtered.map(({ id, title, status }) => {
        return (
          <div key={id} className={s.list}>
            {edit === id ? (
              <div>
                <input type="text" value={newValue} onChange={onChange} />
              </div>
            ) : (
              <div className={!status ? s.close : ""}>{title}</div>
            )}

            {edit === id ? (
              <div>
                <Button onClick={() => saveNewTitle(id)}>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  className={s.btn}
                  type="button"
                  onClick={() => deleteTodo(id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button
                  className={s.btn}
                  type="button"
                  onClick={() => editTodo(id, title)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button
                  className={s.btn}
                  type="button"
                  onClick={() => statusTodo(id)}
                >
                  {status ? (
                    <FontAwesomeIcon icon={faLockOpen} />
                  ) : (
                    <FontAwesomeIcon icon={faCheck} />
                  )}
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
