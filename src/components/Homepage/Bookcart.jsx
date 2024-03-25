import { Link } from "react-router-dom";
import icon from "./icons/rating.svg";
const Bookcart = (book) => {
  const { tags, bookName, publisher, rating, image, bookId } = book.book;

  return (
    <Link to={`/single&book/${bookId}`}>
      <div className="p-5 border rounded-3xl">
        <div className="flex flex-col">
          <div className="flex self-center">
            <img src={image} alt={bookName} />
          </div>
          <div>
            <div className="border-b border-dashed">
              <div className="flex gap-2">
                {tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
              <h1>{bookName}</h1>
              <p>By : {publisher}</p>
            </div>
            <div>
              <p>Fiction</p>
              <div>
                <p>{rating}</p>
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
