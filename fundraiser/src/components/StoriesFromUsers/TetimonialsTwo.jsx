//components/storiesFromUs/TestimonialsTwo
import { useRef, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Container from '@mui/material/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Hero from './Hero';

SwiperCore.use([Autoplay, Navigation]);

function TestimonialsTwo() {
  const navigationStyles =
    'absolute top-0 z-10 flex items-center justify-center w-1/6 h-full text-center opacity-50 cursor-pointer transition-opacity duration-150';

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://localhost:5000/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const { current: prevEl } = navigationPrevRef;
    const { current: nextEl } = navigationNextRef;

    SwiperCore.use([Navigation]);

    const swiper = new SwiperCore('.swiper-container', {
      autoplay: { delay: 5000 },
      speed: 1000,
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      navigation: {
        prevEl,
        nextEl,
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className='bg-gray-700 min-h-screen'>
      <Hero />
      <div className='py-8 relative'>
        <Swiper
          className='swiper-container'
          autoplay={{ delay: 5000 }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Container>
                <div className='bg-gray-100 border border-gray-200 p-4 rounded-lg shadow-md flex mx-auto items-center mr-5'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-1/4 rounded-lg'
                  />
                  <div className='w-1/2 ml-[130px]'>
                    <p className='text-gray-400 italic text-2xl font-bold mb-4'>
                      ~ {testimonial.name}
                    </p>
                    <h2 className='text-3xl font-semibold mb-2 text-gray-600'>
                      {testimonial.message}
                    </h2>
                    <p className='text-gray-800 italic text-lg mt-5 mb-4'>
                      "Let the brain, muscles, nerves, every part of your body,
                      be full of that idea, and just leave every other idea
                      alone. This is the way to success."
                    </p>
                    <div className='flex items-center mt-3'>
                      <img
                        src={testimonial.logo}
                        alt='Company Logo'
                        className='w-12 h-12 mr-2 rounded-full'
                      />
                      <div>
                        <p className='text-lg font-semibold'>
                          {testimonial.name}
                        </p>
                        <p className='text-sm text-gray-500'>
                          Marketing Manager - ABC Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${navigationStyles} left-0`} ref={navigationPrevRef}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={`${navigationStyles} right-0`} ref={navigationNextRef}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsTwo;
