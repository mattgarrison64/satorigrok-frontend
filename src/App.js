import React, { useEffect } from "react";
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
    <>
      <ScrollToTop />
      <AppRoutes /> {/* No BrowserRouter here */}
    </>
  );
}

export default App;