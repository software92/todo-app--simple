import { IHandleTodoRemove, ToDo } from '../types'

interface Props {
  todo: ToDo
  handleTodoRemove: IHandleTodoRemove
}

const Item = ({ todo, handleTodoRemove }: Props) => {
  return (
    <li>
      <span className='underline decoration-double'>To do: {todo.todo}</span>
      <button onClick={() => handleTodoRemove(todo.id)}>제거</button>
    </li>
  )
}

export default Item
