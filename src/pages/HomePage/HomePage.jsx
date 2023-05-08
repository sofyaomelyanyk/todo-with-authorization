// import s from "../HomePage/HomePage.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AddTodo } from "../../components/AddTodo/AddTodo";
import { useEffect } from "react";
import { ListTodo } from "../../components/ListTodo/ListTodo";
import { Header } from "../../components/Header/Header";
import { Plug } from "../../components/Plug/Plug";

export const HomePage = () => {
  const [todo, setTodo] = useState(() => {
    let todos = null;

    try {
      todos = JSON.parse(localStorage.getItem("todos"));
    } catch (e) {}

    return Array.isArray(todos) ? todos : [];
  });
  
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      {isAuth ? (
        <Container>
          <button onClick={() => dispatch(removeUser())}>
            Log Out from {email}
          </button>
          <Header />
          <AddTodo todo={todo} setTodo={setTodo} />
          {todo.length >= 1 ? (
            <ListTodo todo={todo} setTodo={setTodo} />
          ) : (
            <Plug />
          )}
        </Container>
      ) : (
        <Navigate replace to="/login"></Navigate>
      )}
    </>
  );
};
