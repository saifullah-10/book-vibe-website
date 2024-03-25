import { useContext } from "react";
import Readbook from "./Readbook";
import { ReadBook, Wishlist } from "../../Root";

const ListedBook = () => {
  const [readbook] = useContext(ReadBook);
  const [wishBooks] = useContext(Wishlist);
  return (
    <div>
      <div className="w-full text-center lg:py-8 bg-slate-200 rounded-xl">
        <h2>Books</h2>
      </div>
      <div></div>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
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
