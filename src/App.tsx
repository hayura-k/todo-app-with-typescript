import { VFC } from 'react';
import { MemoList } from './components/MemoList';
import { Form } from './components/Form';

export const App: VFC = () => {
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <Form />
      <MemoList />
    </>
  );
}
