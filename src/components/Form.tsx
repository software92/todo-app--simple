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
    <div className='flex flex-col gap-2'>
      {/* <div className='grid grid-cols-2 gap-3'> */}
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        autoFocus
        className='w-60 min-w-40 border border-black-100 rounded-lg focus:outline-none p-2 text-sm text-slate-600'
      />
      <div className='flex justify-center gap-5'>
        <button
          onClick={handleClick}
          className='w-14 h-8 text-sm text-slate-500 rounded-lg py-1 border border-slate-400'
        >
          추가
        </button>
        <button
          onClick={handleTodoReset}
          className='w-14 h-8 text-sm text-red-500 rounded-lg py-1 border border-red-400'
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Form
