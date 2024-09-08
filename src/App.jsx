import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import PageNotFound from "./Pages/404";
import Products from "./Pages/Products";
import Navbar from "./components/Fragments/Navbar";

function App() {
  const hrefLog = useLocation();
  return (
    <>
      {hrefLog.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
