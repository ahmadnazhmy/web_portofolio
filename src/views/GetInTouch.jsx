import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:ahmadnazhmy@gmail.com?subject=Form Submission&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='w-full h-screen bg-[#080808] py-20 flex flex-col justify-center items-center'>
      <div className='w-11/12 md:w-1/2 text-center'>
        <h1 className='text-white text-3xl mb-4 font-bold'>
          Feedback
        </h1>
        <p className='text-center mb-10 md:mx-2 text-[#9C9C9C]'>
          We’d love to hear from you! Whether you have a question about my work, want to discuss a potential project, or just want to say hello, feel free to reach out.
        </p>
        <div className='w-full max-w-md mx-auto'>
          <form onSubmit={handleSubmit} ref={formRef} className='space-y-4'>
            <div>
              <label htmlFor="email" className='block text-white text-left mb-1'>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Please enter your email"
                required 
                className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition-transform duration-500 ${formInView ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-50'}`}
              />
            </div>
            <div>
              <label htmlFor="message" className='block text-white text-left mb-1'>Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="7" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Enter your message"
                required 
                className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition-transform duration-500 ${formInView ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-50'}`}
              />
            </div>
            <button 
              type="submit" 
              ref={buttonRef} 
              className={`w-full h-16 bg-[#3F8E00] text-white rounded-md shadow-lg hover:bg-[#4CAF50] flex items-center justify-center transition-transform duration-500 ${buttonInView ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-50'}`}
            >
              <b>Submit</b> <FontAwesomeIcon icon={faChevronRight} className='ml-2' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;
