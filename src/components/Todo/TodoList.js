import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const TodoList = ({ todos = [], finishTodo }) => {
  const openTodos = todos.filter(todo => !todo.done)
  const closedTodos = todos.filter(todo => todo.done)

  return (
    <div>
      <h2>Open Todos </h2>
      <ul>
        {openTodos.map((todo, key) => (
          <li key={key}>
            {todo.title}{' '}
            <Button color="success" onClick={() => finishTodo(todo.title)}>
              Finished
            </Button>
          </li>
        ))}
      </ul>
      <h2>Closed Todos</h2>
      <ul>
        {closedTodos.map((todo, key) => (
          <li key={key}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  finishTodo: PropTypes.func.isRequired
}
export default TodoList
