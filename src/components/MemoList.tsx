type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
}

export const MemoList = (props: Props) => {
  const { memos, onClickDelete } = props

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
