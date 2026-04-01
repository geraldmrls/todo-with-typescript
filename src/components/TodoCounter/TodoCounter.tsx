import './TodoCounter.css'

interface TodoCounterProps {
  pendingTodoCount: number
}

function TodoCounter({ pendingTodoCount }: TodoCounterProps) {
  return (
    <p className="todo-counter">{pendingTodoCount} tasks remaining</p>
  )
}

export default TodoCounter