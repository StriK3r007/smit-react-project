import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from './screens/Home';
import UserAuth from "./screens/UserAuth";
import Dashboard from "./screens/Dashboard";
import Expenses from "./screens/Expenses";
import Settings from "./screens/Settings";
// import ThemeController from "./components/ThemeController";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/user-auth"
            element={<UserAuth />}
          />
          {/* dashboard layout route */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* default dashboard page */}
            <Route index element={<Home />} />

            {/* sidebar pages */}
            <Route path="expenses" element={<Expenses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};
