import type { Dispatch, SetStateAction } from "react";

import "./TodoInput.css";
import type { Todo } from "../../App";

interface TodoInputProps {
  setInput: (value: string) => void;
  input: string;
  setTodo: Dispatch<SetStateAction<Todo[]>>;
}

function TodoInput({ setInput, setTodo, input }: TodoInputProps) {
  function getInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function saveTodo() {
    if (input.trim() === "") return
    setTodo((prev: Todo[]) => {
      return [
        ...prev,
        {
          name: input,
          id: crypto.randomUUID(),
          isComplete: false
        },
      ];
    });
    setInput("");
  }

  function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      saveTodo();
    }
  }

  return (
    <div className="todo-input-wrapper">
      <input
        value={input}
        className="todo-input"
        type="text"
        placeholder="Add a new task..."
        onChange={getInput}
        onKeyDown={handleEnter}
      />
      <button className="todo-add-btn" onClick={saveTodo}>
        + Add
      </button>
    </div>
  );
}

export default TodoInput;
