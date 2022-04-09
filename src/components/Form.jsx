import { useContext, useState } from "react"
import { TodoListContext } from "./providers/TodoListProvider"

export const Form = () => {
  const { memos, setMemos } = useContext(TodoListContext);

  const [text, setText] = useState('');

  const onClickAdd = () => {
    setMemos([...memos, text])
    setText('')
  }

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <input type='text' value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </>
  )
}
