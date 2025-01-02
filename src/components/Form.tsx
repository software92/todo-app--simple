import { useState } from 'react'

type UpdateTodos = (text: string) => void
// interface Props {
//     updateTodos: (text: string) => void
// }

const Form = ({ updateTodos }: { updateTodos: UpdateTodos }) => {
  const [text, setText] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      updateTodos(text)
      setText('')
    }
  }
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleClick = () => {
    updateTodos(text)
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
    </div>
  )
}

export default Form
