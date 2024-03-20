import {
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";

//Routing
import PrivateRoutes from "./components/routing/PrivateRoutes";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* Switch to Home if you want to see Home Pages first */}
        <Route index element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/*
           PROTECTED ROUTES
           IF USER IS LOGGED IN -> REDIRECT TO THIS ROUTE
           ELSE -> LOGIN

           YOU SHOULD PUT ALL OF PRIVATE ROUTES HERE
        */}
        <Route path="/" element={<PrivateRoutes />}>
          {/* ex: Home is Private or Protected Route*/}
          <Route exact path="/home" element={<Home />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <div className="bg-slate-50">
      <RouterProvider router={router} />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
