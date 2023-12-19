import image1 from '../../assets/photos/7V9A5304.jpg';
import image2 from '../../assets/photos/7V9A5320.jpg';
import image3 from '../../assets/photos/7V9A5437.jpg';
import image4 from '../../assets/photos/7V9A6220.jpg';
import './SlideShow.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const photos = [
    image1,
    image2,
    image3,
    image4
];

export function SlideShow() {
  return (
    <Swiper
      className='swiper-container'
      modules={[ Pagination, Autoplay ]}
      autoplay={{ delay: 2000 }}
      spaceBetween={50}
      slidesPerView={1}
      direction='vertical'
      pagination={{ clickable: true }}
    >
    {
        photos.map((image, i) => (
            <SwiperSlide className='slide-item' key={i}>
                <img src={image} alt='alt'></img>
            </SwiperSlide>
        ))
    }
    </Swiper>
  );
}