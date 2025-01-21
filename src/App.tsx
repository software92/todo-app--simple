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
    setTodos(todos)
  }

  // form
  const handleUpdateTodos = (text: string) => {
    if (text === '') return alert('To Do를 입력해주세요')

    const newTodos = [...todos, { todo: text, id: new Date().toISOString() }]

    saveTodos(newTodos)
  }
  //

  const handleTodoRemove = (selectedId: string) => {
    const newTodos = todos.filter(todo => todo.id !== selectedId)

    saveTodos(newTodos)
  }

  const handleTodoReset = () => saveTodos([])

  useEffect(() => {
    const getLocalTodos = localStorage.getItem(LS_TODOLIST)
    const initTodos = getLocalTodos ? JSON.parse(getLocalTodos) : []

    setTodos(initTodos)
  }, [])

  return (
    // container
    <div className='w-screen h-full py-10 flex flex-col gap-y-4 items-center'>
      <Header />
      <Form
        handleUpdateTodos={handleUpdateTodos}
        handleTodoReset={handleTodoReset}
      />
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
