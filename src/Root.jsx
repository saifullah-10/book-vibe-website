import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
export const BooksContext = createContext();
function Root() {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooksData(data));
  }, []);
  console.log(booksData);
  return (
    <>
      <BooksContext.Provider value={booksData}>
        <section className="max-w-[1440px] w-[98%] lg:w-[80%] mx-auto mt-3 lg:mt-5">
          <Navbar></Navbar>
        </section>
        <section className="max-w-[1440px] w-[98%] lg:w-[80%] mx-auto lg:mt-5">
          <Outlet></Outlet>
        </section>
      </BooksContext.Provider>
    </>
  );
}

export default Root;
