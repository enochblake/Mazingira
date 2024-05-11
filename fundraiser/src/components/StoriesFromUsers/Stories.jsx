import { useRef, useEffect } from 'react';
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

SwiperCore.use([Autoplay, Navigation]);

function TestimonialsTwo() {
  const navigationStyles =
    'absolute top-0 z-10 flex items-center justify-center w-1/6 h-full text-center opacity-50 cursor-pointer transition-opacity duration-150';

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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

  const review1 =
    'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D';
  const review2 =
    'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D';
  const logoSpotify =
    'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvdGlmeSUyMGxvZ298ZW58MHx8MHx8fDA%3D';
  const logoSlack =
    'https://images.unsplash.com/photo-1705988142466-e468bc654eeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xhY2slMjBsb2dvfGVufDB8fDB8fHww';

  return (
      <div className='py-8 relative'>
        <Swiper
          className='swiper-container'
          autoplay={{ delay: 5000 }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          loop
        >
          <SwiperSlide>
            <Container>
              <div className='border border-gray-200 p-4 rounded-lg shadow-md flex mx-auto items-center  '>
                <img
                  src={review1}
                  alt='Review 1'
                  className='w-1/4 h-1/2 rounded-lg'
                />
                <div className='w-1/2 ml-7'>
                  <p className='text-gray-400 italic text-2xl font-bold mb-4'>
                    ~ Donor Story
                  </p>
                  <h2 className='text-3xl font-semibold mb-2 text-gray-500 '>
                    Excellent payment service. You guys are the best!
                  </h2>
                  <p className='text-gray-800 italic text-lg mb-4'>
                    "Let the brain, muscles, nerves, every part of your body, be
                    full of that idea, and just leave every other idea alone.
                    This is the way to success."
                  </p>
                  <div className='flex items-center mt-3'>
                    <img
                      src={logoSpotify}
                      alt='Spotify Logo'
                      className='w-12 h-12 mr-2 rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold '>Mathew Glock</p>
                      <p className='text-sm text-gray-500'>
                        Marketing Manager - Spotify
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>
              <div className='border border-gray-200 p-4 rounded-lg shadow-md flex mx-auto items-center mr-5 '>
                <img
                  src={review1}
                  alt='Review 1'
                  className='w-1/4 rounded-lg'
                />
                <div className='w-1/2 ml-5'>
                  <p className='text-gray-400 italic text-2xl font-bold mb-4'>
                    ~ Donor Story
                  </p>
                  <h2 className='text-3xl font-semibold mb-2 text-gray-500 '>
                    Excellent payment service. You guys are the best!
                  </h2>
                  <p className='text-gray-800 italic text-lg mb-4'>
                    "Let the brain, muscles, nerves, every part of your body, be
                    full of that idea, and just leave every other idea alone.
                    This is the way to success."
                  </p>
                  <div className='flex items-center mt-3'>
                    <img
                      src={logoSpotify}
                      alt='Spotify Logo'
                      className='w-12 h-12 mr-2 rounded-full'
                    />
                    <div>
                      <p className='text-lg font-semibold '>Mathew Glock</p>
                      <p className='text-sm text-gray-500'>
                        Marketing Manager - Spotify
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        </Swiper>
        <div className={`${navigationStyles} left-0`} ref={navigationPrevRef}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={`${navigationStyles} right-0`} ref={navigationNextRef}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
  );
}

export default TestimonialsTwo;
