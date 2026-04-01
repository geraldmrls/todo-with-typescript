import type { Dispatch, SetStateAction } from "react";

import "./TodoItem.css";
import type { Todo } from "../../App";
import Check from "../../assets/square-check.svg?react";
import TrashCan from "../../assets/trash-can.svg?react";

interface TodoItemProps {
  todoes: Todo[];
  setTodoes: Dispatch<SetStateAction<Todo[]>>;
}

export function TodoItem({ todoes, setTodoes }: TodoItemProps) {

  function changeTodoStatus(id: string) {
    setTodoes((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string){
    const itemToDelete = todoes.filter(todo=>{
      return id!==todo.id
    })

    setTodoes(itemToDelete)
  }

  return (
    <div className="no-todo-yet-container">
      {todoes.length === 0 && (
        <p className="no-todo-yet">No todos yet. Add one to get started!</p>
      )}

      {todoes.length !== 0 &&
        todoes.map((todoItem) => {
          return (
            <div className="todo-container" key={todoItem.id}>
              <div className="left-side">
                <Check
                  className={`${todoItem.isComplete === false ? "square-check" : "activate-square-check"}`}
                  onClick={() => {
                    changeTodoStatus(todoItem.id)
                  }}
                />
                <p className={`${todoItem.isComplete === true ? "todo-underline" : "todo"}`}>{todoItem.name}</p>
              </div>

              <TrashCan className="trashcan" onClick={()=>deleteTodo(todoItem.id)}/>
            </div>
          );
        })}
    </div>
  );
}
