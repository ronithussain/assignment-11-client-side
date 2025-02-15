import AboutPage from '../components/AboutPage';
import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';
import MeetOurPartner from '../components/MeetOurPartner';
import Banner from './shared/Banner';

const Home = () => {
    return (
        <div className='lg:mt-[120px] mt-[110px] '>
            <Carousel></Carousel>
            <div className='bg-gradient-to-b from-[#1A1618] to-[#1A1618]'>
            <HomeCard></HomeCard>
            <AboutPage></AboutPage>
            </div>
            <Banner></Banner>
            <MeetOurPartner></MeetOurPartner>
        </div>
    );
};

export default Home;