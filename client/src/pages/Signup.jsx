import { Link } from "react-router-dom";
// Reuse :: Custom UI Component
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/ui/Login_Signup_Forms";

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Form>
        <div id="title" className="grid gap-4 place-items-center">
          <h1 className="text-gray-800 font-medium text-lg text-center">
            Signup
          </h1>
          <p className="text-gray-800 font-normal text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 text-sm font-medium">
              Login
            </Link>
          </p>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Signup</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
