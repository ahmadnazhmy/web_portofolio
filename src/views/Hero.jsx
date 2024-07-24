import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import photo from '/src/assets/IMG_0439.png';

const scrollToElement = (id) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  const handleButtonClick = () => {
    scrollToElement('#about-me');
  };

  return (
    <div className='h-screen w-full bg-[#080808] flex flex-col justify-center items-center'>
      <div
        ref={ref}
        className={`flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-white w-11/12 md:w-3/4 transform transition-transform duration-700 ease-in-out ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className='w-full md:w-[500px] mb-5 md:mb-0 text-center md:text-left md:mr-8'>
          <h1 className='text-[32px] md:text-[44px] mb-3 md:mb-5m font-bold'>Ahmad Nazhmy Zahrian</h1>
          <p className='text-[#9C9C9C] mb-3 md:mb-5 leading-6'>
            Web Developer Enthusiast | Undergraduate Information System Student at UPN Veteran Jakarta
          </p>
          <button
            className='w-[250px] md:w-[270px] h-[50px] md:h-[60px] bg-[#3F8E00] shadow-lg shadow-green-700 text-white rounded-[5px] border-none hover:bg-green-500'
            onClick={handleButtonClick}
          >
            <b>Let's get started</b> <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className='w-full md:w-[350px] flex justify-center md:ml-8 mt-8 md:mt-0 mb-2'>
          <img
            src={photo}
            alt='Profile'
            className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
