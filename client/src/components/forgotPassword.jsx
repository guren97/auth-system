import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid gap-4 place-items-center w-full sm:w-11/12 max-w-md border rounded-md p-8">
        <h1 className="text-lg font-bold  ">
          This page is still on development
        </h1>
        <div className="flex justify-between items-center mt-2  ">
          <label htmlFor="remember" className="flex items-center gap-1 ">
            <span className="text-blue-800 text-sm font-medium">
              <RiLogoutBoxLine />
            </span>

            <span className="text-gray-800 font-normal text-sm">
              <Link className="text-blue-800 text-sm font-medium" to="/login">
                Back to Login
              </Link>
            </span>
          </label>
        </div>
        <div className="flex align-baseline"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
