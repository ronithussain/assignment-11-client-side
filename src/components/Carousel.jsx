// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slider from './Slider'

// Import Images
import imageSlider1 from '../assets/bgimg1.jpg'
import imageSlider2 from '../assets/bgimg2.jpg'
import imageSlider3 from '../assets/bgimg3.jpg'

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Slider
            image={imageSlider1}
            text='Service Review Application System'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={imageSlider2}
            text='Share & Explore Experiences'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            image={imageSlider3}
            text='Real Reviews, Real Insights – Empowering Better Choices'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
