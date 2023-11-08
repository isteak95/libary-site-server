import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;