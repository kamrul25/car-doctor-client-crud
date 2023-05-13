import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shares/Navbar";
import Footer from "../pages/Shares/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;