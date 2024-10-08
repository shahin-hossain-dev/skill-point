import Banner from "./Banner";
import Courses from "./Courses";
import FeqAskQu from "./FeqAskQu";
import GetInTouch from "./GetInTouch";
import OurServices from "./OurServices";
import Teachers from "./Teachers";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-[80%] w-[90%] mx-auto">
        <OurServices />
        <Courses />
      </div>
      <div className="bg-[#F2F4F7] pt-6 pb-24 px-6 mt-12 ">
        <Teachers />
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto ">
        <FeqAskQu />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Homepage;
