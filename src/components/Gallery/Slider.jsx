import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import fit from "../static/images/C1.jpg"
import c2 from "../static/images/c2.jpg"
import c3 from "../static/images/c3.jpg"
import c4 from "../static/images/c4.jpg"
import c5 from "../static/images/c5.jpg"
import { useEffect } from 'react';


const Slider = () => {
    const slides = [
        {
          url: fit,
          con: '"The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to conquer." – Arnold Schwarzenegger',
        },
        {
          url: c2,
          con: '“Everybody wants to be a Bodybuilder but don’t nobody want to lift heavy ass weights!” – Ronnie Coleman ',
        },
        {
          url: c5,
          con: '“Being negative and lazy is a disease that leads to pain, hardship, depression, poor health and failure. Be proactive and give a damn to achieve Success!” – Phil Heath',
        },
    
        {
          url: c3,
          con: '"Victory isn’t defined by wins and losses, it’s defined by effort." – Kai Greene',
        },

        {
          url: c4,
          con: '"If you have discipline, drive, determination, nothing is impossible."  – Dana Linn Bailey',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div 
          style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
          className='max-w-[100vw] h-[50vh] w-full m-auto mb-10 relative group backdrop-blur-sm bg-cover bg-center bg-no-repeat'>
          <div className='absolute w-full h-full backdrop-blur-sm -z-10'></div>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})`}}
            className='w-full h-full  bg-center bg-contain bg-no-repeat duration-500 flex justify-center text-center'>
            <div className='absolute w-full bottom-2 px-10 md:text-xl font-bold text-white bg-black bg-opacity-50'>{slides[currentIndex].con}</div>
          </div>
          {/* Left Arrow */}
          <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
}
 
export default Slider;