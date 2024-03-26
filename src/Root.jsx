import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./root.css";
import { createContext, useEffect, useState } from "react";
export const BooksContext = createContext();
export const ReadBook = createContext();
export const Wishlist = createContext();
function Root() {
  const [readBook, setReadBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);
  console.log(readBook);
  return (
    <>
      <Wishlist.Provider value={[wishList, setWishList]}>
        <ReadBook.Provider value={[readBook, setReadBook]}>
          <section className="max-w-[1440px] w-[98%] lg:w-[80%] mx-auto mt-3 lg:mt-5 sticky top-0 z-20">
            <Navbar></Navbar>
          </section>
          <BooksContext.Provider value={booksData}>
            <section className="max-w-[1440px] w-[98%] lg:w-[80%] mx-auto lg:mt-5">
              <Outlet></Outlet>
            </section>
          </BooksContext.Provider>
        </ReadBook.Provider>
      </Wishlist.Provider>
    </>
  );
}

export default Root;
