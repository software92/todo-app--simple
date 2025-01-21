import { IHandleTodoRemove, ToDo } from '../types'
import Item from './Item'

interface Props {
  todos: ToDo[]
  handleTodoRemove: IHandleTodoRemove
}

const List = ({ todos, handleTodoRemove }: Props) => {
  return (
    <ul className='flex flex-col gap-2 max-w-screen-sm min-w-52 p-4'>
      {todos.map(todo => (
        <Item
          key={todo.id}
          todo={todo}
          handleTodoRemove={handleTodoRemove}
        />
      ))}
    </ul>
  )
}

export default List
