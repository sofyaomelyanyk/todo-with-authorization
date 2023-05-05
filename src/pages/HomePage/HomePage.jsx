// import s from "../HomePage/HomePage.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../../store/slices/userSlice";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { AddTodo } from "../../components/AddTodo/AddTodo";
import { ListTodo } from "../../components/ListTodo/ListTodo";
import { Header } from "../../components/Header/Header";
import { Plug } from "../../components/Plug/Plug";

export const HomePage = () => {
  const [todo, setTodo] = useState([]);
  const { isAuth, name } = useAuth();
  const dispatch = useDispatch();
  console.log(name);
  console.log(isAuth)
  return (
    <>
      {isAuth ? (
        <Container>
          <button onClick={() => dispatch(removeUser())}>
            Log Out from {name}
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
