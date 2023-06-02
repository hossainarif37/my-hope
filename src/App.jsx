import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;