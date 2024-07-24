import React from 'react';
import mockup1 from '/src/assets/holify.png';
import mockup2 from '/src/assets/zerowaste.png';
import mockup3 from '/src/assets/quickcarrental.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const CaseStudies = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='w-full bg-white py-20'>
      <h1 className='text-center mb-2 text-3xl font-bold'>Case Studies</h1>
      <p className='text-center mb-10 text-[#9C9C9C] text-sm md:text-base'>
        Here's an overview of the projects I have worked on
      </p>
      <div className='space-y-20'>
        <div
          ref={ref1}
          className={`flex flex-col-reverse md:flex-row justify-between items-center w-11/12 md:w-2/3 mx-auto gap-8 md:gap-12 mb-20 transform transition-transform duration-700 ease-in-out ${
            inView1 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='w-full md:w-1/2'>
            <h2 className='mb-4 text-2xl font-bold'>Holify</h2>
            <p className='mb-4 text-sm md:text-base leading-6 text-[#9C9C9C]'>
              This website project was completed during an independent study program. It aims to report the condition of potholes on roads.
            </p>
            <a href="https://holify-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#F59933] text-white border-none rounded px-5 py-2 flex items-center justify-center shadow-lg transition-shadow duration-300 ease-in-out hover:bg-[#F78C34]">
                <b>View case study</b> <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </button>
            </a>
          </div>
          <div className='w-full md:w-1/2'>
            <img src={mockup1} alt="Holify Mockup" className='w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105' />
          </div>
        </div>
        <div
          ref={ref2}
          className={`flex flex-col md:flex-row justify-between items-center w-11/12 md:w-2/3 mx-auto gap-8 md:gap-12 mb-20 transform transition-transform duration-700 ease-in-out ${
            inView2 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='w-full md:w-1/2'>
            <img src={mockup2} alt="ZeroWaste Mockup" className='w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105' />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='mb-4 text-2xl font-bold'>ZeroWaste</h2>
            <p className='mb-4 text-sm md:text-base leading-6 text-[#9C9C9C]'>
              This web project is a UI/UX design created during an independent study program. The website aims to address issues related to waste management.
            </p>
            <a href="https://www.figma.com/design/269dnERYFRxDOZ9w5oCKNq/ZeroWaste?node-id=0-1&t=6uVdj0YqxB8MedY9-0" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-[#5EB157] text-white border-none rounded px-5 py-2 flex items-center justify-center shadow-lg transition-shadow duration-300 ease-in-out hover:bg-[#6CCF6C]">
                <b>View case study</b> <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </button>
            </a>
          </div>
        </div>
        <div
          ref={ref3}
          className={`flex flex-col-reverse md:flex-row justify-between items-center w-11/12 md:w-2/3 mx-auto gap-8 md:gap-12 mb-20 transform transition-transform duration-700 ease-in-out ${
            inView3 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='w-full md:w-1/2'>
            <h2 className='mb-4 text-2xl font-bold'>Quick Car Rental</h2>
            <p className='mb-4 text-sm md:text-base leading-6 text-[#9C9C9C]'>
              This project is a website developed during my third semester in a web programming course. The website serves as an administrative platform for managing car rentals.
            </p>
            <button className="bg-[#B9D6E5] text-white border-none rounded px-5 py-2 flex items-center justify-center shadow-lg transition-shadow duration-300 ease-in-out hover:bg-[#C9E1EC]">
              <b>View case study</b> <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </button>
          </div>
          <div className='w-full md:w-1/2'>
            <img src={mockup3} alt="Quick Car Rental Mockup" className='w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
