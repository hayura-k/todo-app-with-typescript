import { useCallback, useState, VFC } from 'react';
import { MemoList } from './components/MemoList';

export const App: VFC = () => {
  const [text, setText] = useState<string>('');
  // genericsで型定義
  const [memos, setMemos] = useState<string[]>([]);

  const onClickAdd = () => {
    setMemos([...memos, text])
    setText('')
  }

  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }, [memos])

  const onChangeText = (e: any) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type='text' value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </>
  );
}
