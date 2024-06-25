import { connect } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo } from "./actions/todoActions";

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: input,
    };
    addTodo(newTodo);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
