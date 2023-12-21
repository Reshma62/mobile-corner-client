import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Header/Navbar";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header/Header";

const RootLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
