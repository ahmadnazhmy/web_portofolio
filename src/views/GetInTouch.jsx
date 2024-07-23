import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:ahmadnazhmy@gmail.com?subject=Form Submission&body=Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };  

  return (
    <div className='w-full h-screen bg-[#080808] py-20 flex flex-col justify-center items-center'>
      <div className='w-11/12 md:w-1/2 text-center'>
        <h1 className='text-white text-3xl mb-4 font-bold'>Get In Touch</h1>
        <p className='text-[#9C9C9C] mb-20'>
        We’d love to hear from you! Whether you have a question about my work, want to discuss a potential project, or just want to say hello, feel free to reach out.
        </p>
        <div className='w-full max-w-md mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-4'>
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
                className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400'
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
                className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400'
              />
            </div>
            <button type="submit" className='w-full h-16 bg-[#3F8E00] text-white rounded-md shadow-lg hover:bg-[#4CAF50] flex items-center justify-center'>
              <b>Submit</b> <FontAwesomeIcon icon={faChevronRight} className='ml-2' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch;
