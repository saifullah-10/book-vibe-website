import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-bold leading-[100px] lg:leading-[150px] text-4xl lg:text-7xl">
          Oops!
        </h1>
        <p className="text-[red] lg:text-3xl text-2xl pb-3 lg:pb-8">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mb-3 text-xl font-medium lg:text-2xl lg:mb-4">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
          <button className="px-4 py-2 text-xl font-semibold text-white bg-green-500 lg:py-3 rounded-xl lg:px-6">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
