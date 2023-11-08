import Banner from "../../Components/Header/Banner/Banner";
import CategoriesSection from "../../Components/categoriesSection/categoriesSection";
import BestSellers from "./BestSellers/BestSellers";
import ComingSoon from "./ComingSoon/ComingSoon";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoriesSection></CategoriesSection>
            <ComingSoon></ComingSoon>
            <BestSellers></BestSellers>
            
        </div>
    );
};

export default Home;