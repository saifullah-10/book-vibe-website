import location from "./icons/location.svg";
import page from "./icons/pages.svg";
import publish from "./icons/publisher.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Readbook = ({ book }) => {
  const {
    bookId,
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
    <div className="p-1 mb-5 border-2 lg:p-4 border-slate-400 rounded-2xl font-['Work_Sans']">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
        <div className="self-center lg:self-start">
          <img src={image} alt={bookName} />
        </div>
        <div>
          <h1 className="font-['Playfair_Display'] text-2xl font-bold text-[#131313]">
            {bookName}
          </h1>
          <p className="font-medium text-[#131313] lg:py-4 py-2">
            By : {author}
          </p>
          <div className="gap-8 lg:flex lg:gap-10">
            <div className="flex flex-col gap-3 my-1 lg:flex-row lg:my-2">
              <span className="text-[#131313] font-bold leading-6">Tag</span>

              <div className="flex flex-wrap gap-1 lg:gap-2">
                {tags.map((tag, index) => (
                  <p
                    className="px-2 py-1 rounded-xl bg-[#23be0a0d] text-[#23BE0A] "
                    key={index}
                  >
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 my-3 lg:my-0">
              <img src={location} width={30} alt="" />
              <p className="text-[#131313cc]">
                Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-2 border-b-2 lg:flex-row lg:pb-4 border-slate-400 ">
            <div className="flex gap-2">
              <img src={publish} alt="" />
              <p className="text-[#13131399]">Publisher: {publisher}</p>
            </div>
            <div className="flex gap-2">
              <img src={page} alt="" />

              <p className="text-[#13131399]">Page {totalPages}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 lg:justify-start lg:gap-5 lg:mt-5">
            <button className="px-1 text-[#328EFF] py-1 lg:px-5 lg:py-3 bg-[#328eff26] rounded-xl">
              Category: {category}
            </button>
            <button className="py-2 px-1 text-[#FFAC33] lg:px-5 lg:py-3 bg-[#ffac3326] rounded-xl">
              Rating: {rating}
            </button>
            <Link to={`/single&book/${bookId}`}>
              <button className="px-1 lg:text-lg font-medium text-white py-2 lg:px-5 lg:py-3 bg-[#23BE0A] rounded-xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Readbook.propTypes = {
  book: PropTypes.obj,
};
export default Readbook;
