import React, { useCallback, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodo } from "./components/IncompletedTodo";
import { CompletedTodo } from "./components/CompletedTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompletedTodos, todoText];
    setIncompletedTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    deleteIncompleteTodos(index);
  };

  const onClickComplete = (index) => {
    const newCompletedTodos = [...completedTodos, incompletedTodos[index]];
    setCompletedTodos(newCompletedTodos);
    deleteIncompleteTodos(index);
  };

  const onClickPutBack = (index) => {
    const newIncompletedTodos = [...incompletedTodos, completedTodos[index]];
    setIncompletedTodos(newIncompletedTodos);
    deleteCompleteTodos(index);
  };

  const deleteIncompleteTodos = (index) => {
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    setIncompletedTodos(newTodos);
  };
  const deleteCompleteTodos = (index) => {
    const newTodos = [...completedTodos];
    newTodos.splice(index, 1);
    setCompletedTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletedTodos.length >= 5}
      />
      {incompletedTodos.length >= 5 && (
        <p>登録できるTODOは5個までです！消化してください！</p>
      )}
      <IncompletedTodo
        incompletedTodos={incompletedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodo completedTodos={completedTodos} onClick={onClickPutBack} />
    </>
  );
};
