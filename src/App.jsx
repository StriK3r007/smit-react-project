import { BrowserRouter, Routes, Route} from "react-router";
import Header from "./components/Header";
import Home from './screens/Home';
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import UserAuth from "./screens/UserAuth";
// import ThemeController from "./components/ThemeController";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/sign-in"
            element={<SignIn/>}
          />
          <Route
            path="/sign-up"
            element={<SignUp/>}
          />
          <Route
            path="/user-auth"
            element={<UserAuth/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
};
