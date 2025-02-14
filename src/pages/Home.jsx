import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';
import Banner from './shared/Banner';

const Home = () => {
    return (
        <div className='lg:mt-[120px] mt-[130px] '>
            <Carousel></Carousel>
            <div className='bg-gradient-to-b from-[#1A1618] to-[#1A1618]'>
            <HomeCard></HomeCard>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;