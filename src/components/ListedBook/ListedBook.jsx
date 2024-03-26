import { useContext } from "react";
import Readbook from "./Readbook";
import { ReadBook, Wishlist } from "../../Root";

const ListedBook = () => {
  const [readbook, setReadBook] = useContext(ReadBook);
  const [wishBooks] = useContext(Wishlist);
  const sortByRating = () => {
    const sort = [].concat(readbook).sort((a, b) => b.rating - a.rating);
    setReadBook(sort);
  };
  const sortByPage = () => {
    const sort = []
      .concat(readbook)
      .sort((a, b) => b.totalPages - a.totalPages);
    setReadBook(sort);
  };
  const sortByYear = () => {
    const sort = []
      .concat(readbook)
      .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    setReadBook(sort);
    console.log(sort);
  };
  console.log(readbook);
  return (
    <div>
      <div className="w-full text-center lg:py-8 bg-slate-200 rounded-xl">
        <h2>Books</h2>
      </div>
      <div>
        <ul className=" menu lg:menu-horizontal bg-base-200 rounded-box">
          <li>
            <details>
              <summary>Sort By</summary>
              <ul className="z-10">
                <li className="w-[200px]" onClick={sortByYear}>
                  <a>By Publishing Year</a>
                </li>
                <li onClick={sortByPage}>
                  <a> By Pages</a>
                </li>
                <li onClick={sortByRating}>
                  <a>By Rating</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div>
        <div role="tablist" className="tabs tabs-lifted -z-10">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            checked
          />
          <div
            role="tabpanel"
            className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
          >
            {readbook.length > 0 ? (
              readbook.map((book) => (
                <Readbook key={book.bookId} book={book}></Readbook>
              ))
            ) : (
              <>
                <p>No Books Read</p>
              </>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="p-6 tab-content bg-base-100 border-base-300 rounded-box"
          >
            {wishBooks.length > 0 ? (
              wishBooks.map((book) => (
                <Readbook key={book.bookId} book={book}></Readbook>
              ))
            ) : (
              <>
                <p>No Books In Wishlist</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
