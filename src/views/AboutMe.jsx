import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import photo from '/src/assets/profile.jpg';

const AboutMe = () => {
  // Use the useInView hook to determine if the element is in view
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='h-screen w-full bg-white flex flex-col justify-center items-center py-10 md:py-20'>
      <h1 className='text-center mb-6 md:mb-8 text-2xl md:text-3xl font-bold'>
        About Me
      </h1>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12 md:w-2/3 mx-auto gap-8'>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <div 
            className={`relative transition-transform duration-1000 ${imageInView ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-50'}`}
            ref={imageRef}
          >
            <img 
              src={photo} 
              alt='Profile Image' 
              className='w-56 md:w-72 h-auto rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <p 
            className={`mb-4 md:mb-6 text-base md:text-base leading-6 text-[#9C9C9C] transition-transform duration-1000 ${textInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`} 
            ref={textRef}
          >
            Hello! I'm Ahmad Nazhmy Zahrian, a dedicated student currently pursuing a degree in Information Systems at UPN Veteran Jakarta. I have a strong passion for web developing, and I'm actively working on projects to enhance my skills. I'm eager to learn, grow, and apply my knowledge to real-world scenarios. Thank you for visiting my portfolio!
          </p>
          <div className={`${textInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} ref={textRef}>
            <a href='https://drive.google.com/file/d/1pLih2RgPlf_jA6Oxwxj9F-vRYJaG1RHU/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <button className='bg-[#5EB157] text-white border-none rounded px-4 md:px-5 py-2 flex items-center justify-center shadow-lg transition-shadow duration-300 ease-in-out hover:bg-[#6CCF6C]'>
                <b>My Resume</b> <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-sm md:text-base" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
