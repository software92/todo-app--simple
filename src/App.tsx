import { useEffect, useState } from 'react'
// import Form from './components/Form';
import Header from './components/Header'
// import List from './components/List';
// import Item from './components/Item';

interface ToDo {
  todo: string
  id: string
}

const LS_TODOLIST = 'todolist'

function App() {
  const [todos, setTodos] = useState<ToDo[]>([])
  const [text, setText] = useState('')

  const updateTodos = () => {
    if (text === '') return alert('To Do를 입력해주세요')

    const newTodos = [...todos, { todo: text, id: new Date().toISOString() }]

    setText('')
    setTodos(newTodos)

    localStorage.setItem(LS_TODOLIST, JSON.stringify(newTodos))
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      updateTodos()
    }
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleClick = () => {
    updateTodos()
  }

  const handleRemove = (item: ToDo) => {
    const newTodos = todos.filter(todo => todo.id !== item.id)

    localStorage.setItem(LS_TODOLIST, JSON.stringify(newTodos))
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
      {/* <Form /> */}
      <div>
        <input
          type='text'
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>추가</button>
      </div>
      <section>
        {/* <List todos={todos} /> */}
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span className='underline decoration-double'>
                To do: {todo.todo}
              </span>
              <button onClick={() => handleRemove(todo)}>제거</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
