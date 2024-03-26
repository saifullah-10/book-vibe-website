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
    <div className="font-['Work_Sans']">
      <div className="w-full py-5 mb-4 text-center rounded-lg lg:mb-8 lg:py-8 bg-slate-200">
        <h2 className="lg:text-2xl text-xl font-bold text-[#131313]">Books</h2>
      </div>
      <div className="flex justify-center mb-4 lg:mb-6">
        <ul className="px-5 bg-green-400 menu lg:menu-horizontal rounded-box">
          <li>
            <details>
              <summary className="text-lg font-semibold text-white">
                Sort By
              </summary>
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
