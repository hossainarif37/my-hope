import Banner from "./Banner";
import DonationRohingya from "./DonationRohingya";
import FuneralRegistration from "./FuneralRegistration";
import GetInvolved from "./GetInvolved";
import NewsLetter from "./NewsLetter";
import Projects from "./Projects";
import Qurbani from "./Qurbani";
import ViewEvents from "./ViewEvents";
import Volunteers from "./Volunteers";

const Home = () => {
    return (
        <div>
            <Banner />
            <FuneralRegistration />
            <Qurbani />
            <DonationRohingya />
            <GetInvolved />
            <Volunteers />
            <Projects />
            <NewsLetter />
            {/* <ViewEvents /> */}
        </div>
    );
};

export default Home;