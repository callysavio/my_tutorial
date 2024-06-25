import { ADD_TO_DO, REMOVE_TO_DO } from "../actions/actionTypes"

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;

