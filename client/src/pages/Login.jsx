import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-full sm:w-11/12 max-w-md border rounded-md p-8">
        <div id="title" className="grid gap-4 place-items-center">
          <h1 className="text-gray-800 font-medium text-lg text-center">
            Login to your account
          </h1>

          <p className="text-gray-800 font-normal text-sm text-center">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-blue-800 text-sm font-medium">
              Sign up
            </Link>
          </p>

          <input
            className="p-2 w-full border rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 w-full border rounded mt-2"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between items-center mt-2 gap-20">
            <label htmlFor="remember" className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-1"
              />
              <span className="text-gray-800 font-normal text-sm">
                Remember Me
              </span>
            </label>
            <Link
              to="/forgotpassword"
              className="text-blue-800 font-medium text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className="border rounded w-full mt-4 p-2 bg-slate-900 hover:bg-slate-800 text-white"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
