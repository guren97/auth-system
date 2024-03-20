import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form className="w-full sm:w-11/12 max-w-md border rounded-md p-8">
        <div id="title" className="grid gap-4 place-items-center">
          <h1 className="text-gray-800 font-medium text-lg text-center">
            Signup
          </h1>
          <p className="text-gray-800 font-normal text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800 text-sm font-medium">
              Login
            </Link>
          </p>
          <input
            className="p-2 w-full border rounded"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 w-full border rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 w-full border rounded"
            type="password"
            placeholder="Password"
          />
          <button
            className="border rounded w-full p-2 bg-slate-900 hover:bg-slate-800 text-white"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
