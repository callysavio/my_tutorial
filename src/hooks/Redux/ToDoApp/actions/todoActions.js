import { ADD_TO_DO, REMOVE_TO_DO } from "./actionTypes";

export const addTodo = (todo) => ({
  type: ADD_TO_DO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TO_DO,
  payload: id,
});
