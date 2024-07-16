import React from "react";

const BookList = [
  {
    id: 1,
    title: "우리가 빛의 속도로 갈 수 없다면",
    author: "김초엽",
  },
  {
    id: 2,
    title: "노랜드",
    author: "천선란",
  },
  {
    id: 3,
    title: "지구 끝의 온실",
    author: "김초엽",
  },
];

const Bookshelf = () => {
  return (
    <div>
      <h2>Youbin's Bookshelf</h2>
      <ul>
        {BookList.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> ({book.author})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
