import { IHandleTodoRemove, ToDo } from '../types'
import Item from './Item'

interface Props {
  todos: ToDo[]
  handleTodoRemove: IHandleTodoRemove
}

const List = ({ todos, handleTodoRemove }: Props) => {
  return (
    <ul>
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
