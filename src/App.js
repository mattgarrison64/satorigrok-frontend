import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/css/tailwind.css";
import "./assets/css/icons.css";
import ScrollToTop from "./component/Scroll-top";
import AppRoutes from "./routes"; // Import the new routes file

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes /> {/* Use the routes component */}
    </BrowserRouter>
  );
}

export default App;