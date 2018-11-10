import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Navigation from './components/Nav'
import TodoApp from './components/Todo/TodoApp'

import './App.scss'

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Container>
          <TodoApp />
        </Container>
      </>
    )
  }
}

export default App
