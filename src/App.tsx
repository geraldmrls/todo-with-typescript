import { useState } from "react";

import TodoHeader from "./components/TodoHeader/TodoHeader.tsx";
import TodoInput from "./components/TodoInput/TodoInput.tsx";
import TodoCounter from "./components/TodoCounter/TodoCounter.tsx";
import { TodoItem } from "./components/TodoItem/TodoItem.tsx";
import "./App.css";

export type Todo = {
  name: string;
  id: string;
  isComplete: boolean
};

function App() {
  const [input, setInput] = useState<string>("");
  const [todoes, setTodoes] = useState<Todo[]>([]);

  const pendingTodoes: Todo[] = todoes.filter(todo=>{
    return todo.isComplete === false
  })

  const pendingTodoCount = pendingTodoes.length;

  return (
    <div className="app">
      <TodoHeader />
      <TodoInput setInput={setInput} setTodo={setTodoes} input={input} />
      <TodoCounter pendingTodoCount={pendingTodoCount}/>
      <TodoItem todoes={todoes} setTodoes={setTodoes}/>
    </div>
  );
}

export default App;
