export interface ToDo {
  todo: string
  id: string
}

export type IHandleUpdateTodos = (text: string) => void
export type IHandleTodoRemove = (id: string) => void
export type IHandleTodoReset = () => void
