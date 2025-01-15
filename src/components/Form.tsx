import { useState } from 'react'
import { IHandleTodoReset, IHandleUpdateTodos } from '../types'

interface Props {
  handleUpdateTodos: IHandleUpdateTodos
  handleTodoReset: IHandleTodoReset
}

const Form = ({ handleUpdateTodos, handleTodoReset }: Props) => {
  const [text, setText] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleUpdateTodos(text)
      setText('')
    }
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleClick = () => {
    handleUpdateTodos(text)
    setText('')
  }

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>추가</button>
      <button onClick={handleTodoReset}>Reset</button>
    </div>
  )
}

export default Form
