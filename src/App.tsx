import { useState, VFC } from 'react';
import { MemeList } from './components/MemoList';

export const App: VFC = () => {
  const [text, setText] = useState<string>('');
  // genericsで型定義
  const [memos, setMemos] = useState<string[]>([]);

  console.log(text)
  console.log(memos)
  const onClickAdd = () => {
    setMemos([...memos, text])
    setText('')
  }

  const onChangeText = (e: any) => {
    setText(e.target.value)
  }

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type='text' value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
      <ul>
        {memos.map((memo) =>
          <li>{memo}</li>
        )}
      </ul>
    </>
  );
}
