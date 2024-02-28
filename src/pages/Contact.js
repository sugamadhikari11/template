import React, { useState } from 'react';
import Cute from '../img/contact/cutie.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Create a download link for the form data
    const fileContent = JSON.stringify(formData, null, 2);
    const blob = new Blob([fileContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.json';
    link.click();
  
    // Clear form after successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <motion.section 
    initial={{ opacity: 0, y:'100%' }}
    animate={{ opacity: 1, y:0}}
    exit={{ opacity: 0 , y:'100%'}}
    transition={transition1} 
    className='section'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <div className='lg:flex-1 lg:pl-20 px-4'>
          <h1 className="h1">Contact Me</h1>
          <p className='mb-12'>I would love to get suggestion from you!</p>
      
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input type="text" id="name" name="name" placeholder='Your Name:' value={formData.name} onChange={handleChange} className="w-full pl-3 h-[60px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500" />
              <input type="email" id="email" name="email" placeholder='Your Email:' value={formData.email} onChange={handleChange} className="w-full pl-3 h-[60px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <input type='text' id="message" name="message" placeholder='Your Message:' value={formData.message} onChange={handleChange} className="w-full pl-3 h-[60px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"/>
            <button type="submit" className="btn mx-auto  mb-[30px] lg:max-0 self-start">Send It</button>
          </form>
        </div>
        <motion.div
         initial={{ opacity: 0, y:'100%' }}
         animate={{ opacity: 1, y:0}}
         exit={{ opacity: 0 , y:'100%'}}
         transition={{transition: transition1, duration:1.5}} 
         className='lg:flex-1'>
          <img src={Cute} alt=''></img>
        </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
