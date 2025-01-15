export interface ToDo {
  todo: string
  id: string
}

export type IHandleTodoRemove = (id: string) => void
