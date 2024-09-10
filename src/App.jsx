import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import PageNotFound from "./Pages/404";
import Products from "./Pages/Products";
import Navbar from "./components/Fragments/Navbar";
import { useState } from "react";
import ProfilePage from "./Pages/Profile";

function App() {
  const hrefLog = useLocation();
  const [cartDisplay, setCartDisplay] = useState(false);

  const toggleCartDisplay = () => {
    setCartDisplay((prevState) => !prevState);
  };
  return (
    <>
      {hrefLog.pathname !== "/login" && (
        <Navbar toggleCart={toggleCartDisplay} />
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/products"
          element={<Products cartDisplay={cartDisplay} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
