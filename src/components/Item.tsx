import { IHandleTodoRemove, ToDo } from '../types'

interface Props {
  todo: ToDo
  handleTodoRemove: IHandleTodoRemove
}

const Item = ({ todo, handleTodoRemove }: Props) => {
  return (
    <li className='flex gap-2 justify-between items-center w-full'>
      <span className='w-full'>
        <strong className='text-lg'>
          To do
          <br /> :{' '}
        </strong>

        {todo.todo}
      </span>
      <button
        onClick={() => handleTodoRemove(todo.id)}
        className='border border-slate-700 rounded-md p-1 text-1 w-12 h-10'
      >
        제거
      </button>
    </li>
  )
}

export default Item
