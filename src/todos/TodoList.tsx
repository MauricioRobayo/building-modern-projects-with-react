import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components/macro';

import { loadTodos, removeTodo, markCompletedTodo } from "../actions";
import TodoItem from "./TodoItem";
import { AppState } from "../types";
import NewTodoForm from "./NewTodoForm";
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../selectors";

const TodoListWrapper = styled.div`
  max-width: 720px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 4px;
`;

const TodoList = () => {
  const completeTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getCompleteTodos
  );
  const incompleteTodos = useSelector<AppState, AppState["todos"]["data"]>(
    getIncompleteTodos
  );
  const isLoading = useSelector<AppState, AppState["todos"]["isLoading"]>(
    getTodosLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const onRemoveTodoHandler = (id: string) => {
    dispatch(removeTodo(id));
  };

  const onMarkCompletedTodoHandler = (id: string) => {
    dispatch(markCompletedTodo(id));
  };

  const loader = <div>Loading todos...</div>;
  const content = (
    <TodoListWrapper>
      <NewTodoForm />
      <h2>TODOS</h2>
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
          markCompletedTodo={onMarkCompletedTodoHandler}
        />
      ))}
      <h2>Completed TODOS</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={onRemoveTodoHandler}
          markCompletedTodo={onMarkCompletedTodoHandler}
        />
      ))}
    </TodoListWrapper>
  );

  return isLoading ? loader : content;
};

export default TodoList;
