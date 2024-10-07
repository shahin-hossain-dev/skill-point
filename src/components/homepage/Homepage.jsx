import Banner from "./Banner";
import Courses from "./Courses";
import FeqAskQu from "./FeqAskQu";
import OurServices from "./OurServices";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-[80%] w-[90%] mx-auto">
        <OurServices />
        <Courses />
        <FeqAskQu />
      </div>
    </div>
  );
};

export default Homepage;
