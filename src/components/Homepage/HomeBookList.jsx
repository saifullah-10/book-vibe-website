import { useContext } from "react";
import { BooksContext } from "../../Root";
import Bookcart from "./Bookcart";
const HomeBookList = () => {
  const booksData = useContext(BooksContext);

  return (
    <>
      <div className="my-5 lg:my-10">
        <p className="text-center text-2xl lg:text-4xl font-['Playfair_Display'] font-bold">
          Books
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 lg:gap-8 ">
        {booksData?.map((book) => (
          <>
            <Bookcart key={book.id} book={book}></Bookcart>
          </>
        ))}
      </div>
    </>
  );
};

export default HomeBookList;
