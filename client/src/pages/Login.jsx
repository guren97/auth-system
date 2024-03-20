import { Link } from "react-router-dom";
// Reuse :: Custom UI Component
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Login_Signup_Forms";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Form>
        <div id="title" className="grid gap-4 place-items-center">
          <h1 className="text-gray-800 font-medium text-lg text-center">
            Login to your account
          </h1>

          <p className="text-gray-800 font-normal text-sm text-center">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-indigo-600 text-sm font-medium">
              Sign up
            </Link>
          </p>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
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
              className="text-indigo-600 font-medium text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <Button>Login</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
