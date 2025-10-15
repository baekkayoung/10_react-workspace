import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const mockDate = [
    {
      id: 0,
      isfav: false,
      content: "어린왕자",
      date: new Date().getTime(),
    },
    {
      id: 1,
      isfav: false,
      content: "중간왕자",
      date: new Date().getTime(),
    },
    {
      id: 2,
      isfav: false,
      content: "예쁜왕자",
      date: new Date().getTime(),
    },
  ];

  const [books, setBooks] = useState(mockDate);
  const idRef = useRef(3); // Ref는 current

  const onCreate = (content) => {
    const newBook = {
      id: idRef.current++,
      isfav: false,
      content: content,
      date: new Date().getTime(),
    };
    setBooks([newBook, ...books]);
  };

  const onUpdate = (targetId) => {
    setBooks(
      books.map((book) => {
        if (book.id === targetId) {
          return { ...book, isfav: !book.isfav };
        }
        return book;
      })
    );
  };

  const onReturn = (targetId) => {
    setBooks(books.filter((todo) => todo.id !== targetId));
  };

  const onRenew = (targetId) => {
    setBooks(
      books.map((book) => {
        if (book.id === targetId) {
          const newDate = new Date(book.date);
          newDate.setDate(newDate.getDate() + 14);
          return { ...book, date: newDate.getTime() };
        }
        return book;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        books={books}
        onUpdate={onUpdate}
        onReturn={onReturn}
        onRenew={onRenew}
      />
    </div>
  );
}

export default App;
