import location from "./icons/location.svg";
import page from "./icons/pages.svg";
import publish from "./icons/publisher.svg";
const Readbook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="p-2 mb-5 border-2 lg:p-4 border-slate-400 rounded-2xl">
      <div className="flex gap-4 lg:gap-5">
        <div>
          <img src={image} alt={bookName} />
        </div>
        <div>
          <h1>{bookName}</h1>
          <p>By : {author}</p>
          <div className="flex">
            <div>
              <span>Tag</span>

              <div>
                {tags.map((tag, index) => (
                  <p key={index}>#{tag}</p>
                ))}
              </div>
            </div>
            <div>
              <img src={location} alt="" />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex pb-2 border-b-2 lg:pb-4 border-slate-400 ">
            <div className="flex">
              <img src={publish} alt="" />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex">
              <img src={page} alt="" />
              <p>Page {totalPages}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-3 lg:gap-5 lg:mt-5">
            <button className="px-3 py-2 lg:px-5 lg:py-3 bg-[#328EFF]">
              Category: {category}
            </button>
            <button className="px-3 py-2 lg:px-5 lg:py-3 bg-[#FFAC33]">
              Rating: {rating}
            </button>
            <button className="px-3 py-2 lg:px-5 lg:py-3 bg-[#23BE0A]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readbook;
