import "./List.css";
import BookItem from "./BookItem";
import { useState } from "react";

const List = ({ books, onUpdate, onReturn, onRenew }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return books;
    }
    return books.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterdBooks = getFilteredDate();

  return (
    <div className="List">
      <h4>현재 대출 목록 현황 📖</h4>
      <input
        onChange={onChangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"
      />
      <div className="books_wrapper">
        {filterdBooks.map((book) => {
          console.log(book);
          return (
            <BookItem
              key={book.id}
              {...book}
              onUpdate={onUpdate}
              onReturn={onReturn}
              onRenew={onRenew}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
