import { useContext, useCallback } from "react"
import { TodoListContext } from "./providers/TodoListProvider"

export const MemoList = () => {
  const { memos, setMemos } = useContext(TodoListContext)

  const onClickDelete = useCallback((index) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  },[memos])

  return (
    <ul>
      {memos.map((memo, index) =>
        <li>
          <p>{memo}</p>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </li>
      )}
    </ul>
  )
}
