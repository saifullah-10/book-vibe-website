const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full lg:h-[calc(100vh-111px)] lg:flex justify-center items-center mx-auto">
      <div className="lg:w-1/2 w-[80%] mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
          <label className="flex items-center gap-2 input input-bordered">
            Name
            <input type="text" className="grow" placeholder="Your Name" />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            Email
            <input type="text" className="grow" placeholder="Your Email" />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message</span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Message"
            ></textarea>
          </label>
          <input
            type="submit"
            value="Submit"
            className="px-5 py-3 text-white bg-green-700 cursor-pointer rounded-xl lg:px-7 lg:py-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
