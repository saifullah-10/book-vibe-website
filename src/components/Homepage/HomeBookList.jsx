import { useContext } from "react";
import { BooksContext } from "../../Root";
import Bookcart from "./Bookcart";
const HomeBookList = () => {
  const booksData = useContext(BooksContext);

  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:gap-8 lg:mt-20">
      {booksData.map((book) => (
        <>
          <Bookcart key={book.id} book={book}></Bookcart>
        </>
      ))}
    </div>
  );
};

export default HomeBookList;
