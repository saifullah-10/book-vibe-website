import { Link } from "react-router-dom";
import icon from "./icons/rating.svg";
const Bookcart = (book) => {
  const { tags, bookName, publisher, rating, image, bookId } = book.book;

  return (
    <Link to={`/single&book/${bookId}`}>
      <div className="lg:p-5 p-3 border rounded-3xl font-['Work_Sans']">
        <div className="flex flex-col">
          <div className="flex self-center">
            <img src={image} alt={bookName} />
          </div>
          <div>
            <div className="flex flex-col border-b-2 border-dashed">
              <div className="flex gap-2 mt-4 mb-2 lg:mb-3">
                {tags.map((tag, index) => (
                  <p
                    className="px-3 py-1 rounded-xl bg-[#23be0a0d] text-[#23BE0A] "
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <h1 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold lg:my-2 my-1">
                {bookName}
              </h1>
              <p className="text-[#131313cc] font-medium lg:pb-4 pb-3">
                By : {publisher}
              </p>
            </div>
            <div className="flex items-center justify-between my-2 lg:my-3">
              <p className="text-[#131313cc] font-medium">Fiction</p>
              <div className="flex items-center gap-2">
                <p className="font-medium text-[#131313cc]">{rating}</p>
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Bookcart;
