import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../Root";
import { ReadBook } from "../../Root";
import { Wishlist } from "../../Root";
const Singlebook = () => {
  const data = useParams();
  const allData = useContext(BooksContext);
  const [readData, setReadData] = useContext(ReadBook);
  const [wish, setWish] = useContext(Wishlist);
  const bookid = data.bookId;
  const singleBookData = allData.find((data) => data.bookId == bookid);

  const {
    author,
    category,
    image,
    bookName,
    review,
    totalPages,
    tags,
    rating,
    yearOfPublishing,
  } = singleBookData;
  const handleWish = (currentWish) => {
    const isDataRead = readData.find(
      (data) => data.bookId == currentWish.bookId
    );
    const isWishlist = wish.find((data) => data.bookId == currentWish.bookId);
    if (isDataRead) {
      alert("add");
    } else if (isWishlist) {
      alert("add wish");
    } else {
      const allWish = [...wish, currentWish];
      setWish(allWish);
    }
  };
  const isAppear = (obj) => {
    if (readData.find((data) => data.bookId == obj.bookId)) {
      alert("apper");
    } else {
      const data = [...readData, obj];
      setReadData(data);
    }
  };
  console.log(wish);
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="flex items-center justify-center py-4 bg-slate-300 lg:w-1/2 lg:py-10 rounded-3xl">
          <img className="lg:w-[500px] w-[300px]" src={image} alt={bookName} />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-3 border-b border-black lg:mb-5">
            <h1>The Catcher in the Rye</h1>
            <p>By : {author}</p>
          </div>
          <div className="my-3 border-b border-black lg:my-5">
            <h4>{category}</h4>
          </div>
          <div>
            <span>Review :</span> {review}
          </div>
          <div className="pb-4 border-b border-black lg:pb-7">
            <div>
              <span>Tag</span>
              <div className="flex gap-3 lg:gap-5">
                <p>#Young Adult</p>
                <p>#Identity</p>
              </div>
            </div>
          </div>
          <div>
            <table>
              <tr>
                <td>Number of Pages:</td>
                <td>{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td>J.B Lippincott & Co.</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td>{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>{rating}</td>
              </tr>
            </table>
          </div>
          <div className="flex gap-3 lg:gap-5">
            <button
              onClick={() => isAppear(singleBookData)}
              className="px-4 py-2 border-2 rounded-lg lg:px-6 lg:py-3 border-slate-600"
            >
              Read
            </button>

            <button
              onClick={() => handleWish(singleBookData)}
              className="px-4 py-2 lg:px-6 lg:py-3 rounded-lg bg-[#50B1C9]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebook;
