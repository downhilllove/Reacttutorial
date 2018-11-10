import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('')

  const onChange = e => {
    const { value } = e.target
    setTodo(value)
  }
  const onSubmit = e => {
    e.preventDefault()
    addTodo(todo)
  }

  return (
    <div>
      <h2>Add Tools</h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="name">Aufgabe</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="xxx"
            value={todo}
            onChange={onChange}
          />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    </div>
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm
