import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'
import { ToDo } from './types'

const LS_TODOLIST = 'todolist'

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])

  const saveTodos = (todos: ToDo[]) => {
    localStorage.setItem(LS_TODOLIST, JSON.stringify(todos))
  }

  // form
  const updateTodos = (text: string) => {
    if (text === '') return alert('To Do를 입력해주세요')

    const newTodos = [...todos, { todo: text, id: new Date().toISOString() }]

    setTodos(newTodos)
    saveTodos(newTodos)
  }
  //

  const handleTodoRemove = (selectedId: string) => {
    const newTodos = todos.filter(todo => todo.id !== selectedId)

    saveTodos(newTodos)
    setTodos(newTodos)
  }

  useEffect(() => {
    const getLocalTodos = localStorage.getItem(LS_TODOLIST)
    const initTodos = getLocalTodos ? JSON.parse(getLocalTodos) : []

    setTodos(initTodos)
  }, [])

  return (
    // container
    <div>
      <Header />
      <Form updateTodos={updateTodos} />
      <section>
        <List
          todos={todos}
          handleTodoRemove={handleTodoRemove}
        />
      </section>
    </div>
  )
}

export default App
