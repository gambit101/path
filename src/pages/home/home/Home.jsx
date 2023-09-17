import Edites from "../../../components/Edites";
import GetStarted from "../../../components/GetStarted";
import LeftSide from "../../../components/LeftSide";
import Paths from "../../../components/Paths";
import RightSide from "../../../components/RightSide";
import SectionThree from "../../../components/SectionThree";
import Slider from "../../../components/Slider";

const Home = () => {
    return (
        <div>
            <Paths></Paths>
            <div className="fixed right-0 mr-10 bottom-0 mb-10 z-10">
                <Edites></Edites>
            </div>
            <div className="mx-36 flex mt-20 gap-10">
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </div>
            <SectionThree></SectionThree>
            <Slider></Slider>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;