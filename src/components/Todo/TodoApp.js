import React, { useState } from 'react'
import TodoList from './TodoList'
import Todoform from './TodoForm'

const todoMockData = [
  { title: 'Katze füttern', done: false },
  { title: 'Auto waschen', done: true },
  { title: 'Programmieren', done: false }
]

const TodoApp = () => {
  const [todos, setTodos] = useState(todoMockData)
  const addTodo = title => {
    setTodos([...todos, { title, done: false }])
  }

  const finishTodo = title => {
    setTodos(
      todos.map(todo => {
        if (todo.title === title) return { title, done: true }
        else return todo
      })
    )
  }
  return (
    <div>
      <h1>Todo App</h1>
      <Todoform addTodo={addTodo} />
      <TodoList todos={todos} finishTodo={finishTodo} />
    </div>
  )
}

export default TodoApp
