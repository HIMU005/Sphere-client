import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgimg1 from '../assets/images/carousel1.jpg';
import bgimg2 from '../assets/images/carousel2.jpg';
import bgimg3 from '../assets/images/carousel3.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
// import './styles.css';
const Carousel = () => {



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
                className="mySwiper"
            >
                <SwiperSlide> <Slide image={bgimg1} text='Get your web development done in a minutes' /> </SwiperSlide>
                <SwiperSlide> <Slide image={bgimg2} text='Get your graphics done in a minutes' /> </SwiperSlide>
                <SwiperSlide> <Slide image={bgimg3} text='Start your Digital Marketing campaign don here done in a minutes' /> </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Carousel;