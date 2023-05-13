import { useRouteError } from "react-router-dom";
import Frame from "../../assets/Frame.png";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-1/2 mx-auto mt-28 text-error text-2xl text-center">
      <img src={Frame} alt="" className="object-contain mb-3" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
