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
  } = singleBookData || {};
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

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-8 font-['Work_Sans']">
        <div className="flex items-center justify-center py-4 bg-slate-300 lg:w-1/2 lg:py-10 lg:self-start rounded-3xl">
          <img
            className="lg:w-[500px] w-[300px] rounded-xl"
            src={image}
            alt={bookName}
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="border-b border-[#131313cc] lg:mb-5">
            <h1 className="font-['Playfair_Display'] text-2xl font-bold lg:text-4xl">
              {bookName}
            </h1>
            <p className="text-[#131313cc] text-lg lg:text-xl font-medium lg:py-3 py-2">
              By : {author}
            </p>
          </div>
          <div className="lg:pb-5 max-sm:py-3 border-b border-[#131313cc]  lg:my-5">
            <h4 className="text-[#131313cc] text-lg lg:text-xl font-medium">
              {category}
            </h4>
          </div>
          <div className="mt-6 lg:mt-0">
            <span className="text-[#131313] font-bold leading-6">Review :</span>{" "}
            <p className="text-[#131313b3] leading-6 inline">{review}</p>
          </div>
          <div className="pb-4 border-b border-[#131313cc] lg:py-7">
            <div className="flex mt-4 lg:mt-0 lg:gap-5">
              <span className="text-[#131313] font-bold leading-6">Tag</span>
              <div className="flex gap-3 lg:gap-5">
                {tags?.map((tag, index) => (
                  <p
                    className="px-3 py-1 rounded-xl bg-[#23be0a0d] text-[#23BE0A] "
                    key={index}
                  >
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="my-5 lg:my-8">
            <table width={500}>
              <tr>
                <td className="py-1 lg:py-2 text-[131313cc]">
                  Number of Pages:
                </td>
                <td className="py-1 lg:py-2 text-[#131313] font-bold">
                  {totalPages}
                </td>
              </tr>
              <tr>
                <td className="py-1 lg:py-2 text-[131313cc]">Publisher:</td>
                <td className="py-1 lg:py-2 text-[#131313] font-bold">
                  J.B Lippincott & Co.
                </td>
              </tr>
              <tr>
                <td className="py-1 lg:py-2 text-[131313cc]">
                  Year of Publishing:
                </td>
                <td className="py-1 lg:py-2 text-[#131313] font-bold">
                  {yearOfPublishing}
                </td>
              </tr>
              <tr>
                <td className="py-1 lg:py-2 text-[131313cc]">Rating:</td>
                <td className="py-1 lg:py-2 text-[#131313] font-bold">
                  {rating}
                </td>
              </tr>
            </table>
          </div>
          <div className="flex gap-3 mb-5 lg:gap-5">
            <button
              onClick={() => isAppear(singleBookData)}
              className="px-4 py-2 text-lg font-semibold border-2 rounded-lg hover:bg-slate-300 lg:px-6 lg:py-3 border-slate-600"
            >
              Read
            </button>

            <button
              onClick={() => handleWish(singleBookData)}
              className="px-4 py-2 text-lg font-semibold hover:bg-[#3e93a8] text-white lg:px-6 lg:py-3 rounded-lg bg-[#50B1C9]"
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
