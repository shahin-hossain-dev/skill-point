import Banner from "./Banner";
import OurServices from "./OurServices";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="md:w-[80%] w-[90%] mx-auto">
        <OurServices />
      </div>
    </div>
  );
};

export default Homepage;
