import { createContext, useState } from "react";

export const TodoListContext = createContext({});

export const TodoListProvider = (props: any) => {
  const { children } = props;

  const [memos, setMemos] = useState<string[]>([]);

  return (
    <TodoListContext.Provider value={{ memos, setMemos }}>
      {children}
    </TodoListContext.Provider>
  )
}
