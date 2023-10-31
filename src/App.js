import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignUpPageLaptop from "./pages/SignUpPageLaptop";
import HomePageLaptop from "./pages/HomePageLaptop";
import LoginPageLaptop from "./pages/LoginPageLaptop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-laptop":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-laptop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignUpPageLaptop />} />
      <Route path="/home-page-laptop" element={<HomePageLaptop />} />
      <Route path="/login-page-laptop" element={<LoginPageLaptop />} />
    </Routes>
  );
}
export default App;
