import Carousel from '../components/Carousel';
import HomeCard from '../components/HomeCard';
import Banner from './shared/Banner';

const Home = () => {
    return (
        <div className='lg:mt-[120px] mt-[130px]'>
            <Carousel></Carousel>
            <HomeCard></HomeCard>
            <Banner></Banner>
        </div>
    );
};

export default Home;