import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div ref={skillsRef} className='h-auto w-full bg-[#080808] py-10 flex flex-col items-center'>
      <h1 className='text-white text-3xl md:text-4xl mb-4 font-bold'>
        Skills
      </h1>
      <p className='text-[#9C9C9C] mb-10 text-sm md:text-base text-center'>
        This is the programming languages that I have studied so far.
      </p>
      <div className='flex flex-wrap justify-center gap-8'>
        <div className={`flex flex-col items-center transition-transform duration-1000 ${skillsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
          <FontAwesomeIcon icon={faHtml5} className='text-[#f16529] text-3xl md:text-4xl mb-2' title="HTML"/>
          <span className='text-white text-xs md:text-sm'>HTML</span>
        </div>
        <div className={`flex flex-col items-center transition-transform duration-1000 ${skillsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
          <FontAwesomeIcon icon={faCss3Alt} className='text-[#28a9e1] text-3xl md:text-4xl mb-2' title="CSS"/>
          <span className='text-white text-xs md:text-sm'>CSS</span>
        </div>
        <div className={`flex flex-col items-center transition-transform duration-1000 ${skillsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
          <FontAwesomeIcon icon={faJsSquare} className='text-yellow-400 text-3xl md:text-4xl mb-2' title="JavaScript"/>
          <span className='text-white text-xs md:text-sm'>JavaScript</span>
        </div>
        <div className={`flex flex-col items-center transition-transform duration-1000 ${skillsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
          <FontAwesomeIcon icon={faReact} className='text-blue-500 text-3xl md:text-4xl mb-2' title="React"/>
          <span className='text-white text-xs md:text-sm'>React</span>
        </div>
        <div className={`flex flex-col items-center transition-transform duration-1000 ${skillsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
          <FontAwesomeIcon icon={faNodeJs} className='text-green-500 text-3xl md:text-4xl mb-2' title="Express.js"/>
          <span className='text-white text-xs md:text-sm'>Express.js</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
