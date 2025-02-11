import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./root.css";
import { createContext, useEffect, useState } from "react";
export const BooksContext = createContext();
export const ReadBook = createContext();
export const Wishlist = createContext();
export const ChartData = createContext();
function Root() {
  const [readBook, setReadBook] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);
  console.log(readBook);
  return (
    <>
      <ChartData.Provider value={[chart, setChart]}>
        <Wishlist.Provider value={[wishList, setWishList]}>
          <ReadBook.Provider value={[readBook, setReadBook]}>
            <section className="max-w-[1440px] w-[98%] lg:w-[85%] mx-auto mt-3 lg:mt-5 sticky top-0 z-20">
              <Navbar></Navbar>
            </section>
            <BooksContext.Provider value={booksData}>
              <section className="max-w-[1440px] w-[98%] lg:w-[85%] mx-auto lg:mt-5 lg:min-h-[calc(100vh-111px)]">
                <Outlet></Outlet>
              </section>
            </BooksContext.Provider>
          </ReadBook.Provider>
        </Wishlist.Provider>
      </ChartData.Provider>
    </>
  );
}

export default Root;
